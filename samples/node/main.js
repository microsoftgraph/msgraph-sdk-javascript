require("isomorphic-fetch");

const MicrosoftGraph = require("../../lib/src/index.js");

const secrets = require("./secrets");

const fs = require("fs");

const stream = require("stream")

const client = MicrosoftGraph.Client.init({
    defaultVersion: "v1.0",
    debugLogging: true,
    authProvider: (done) => {
        done(null, secrets.accessToken);
    },
});


function uploadFile1() {
    fs.readFile("./testpd.pdf", {}, function(err, file) {
        if (err) {
            throw err;
        }
        let fileName = "testpd.pdf";
        oneDriveLargeFileUpload1(client, file, fileName)
            .then((response) => {
                console.log(response);
                console.log("File Uploaded Successfully.!!");
            })
            .catch((error) => {
                throw error;
            });
    });
}
async function oneDriveLargeFileUpload1(client, file, fileName) {
    try {
        let options = {
            path: "/Documents",
            fileName,
            rangeSize: 1024 * 1024,
        };
        const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.create(client, file, options);
        const response = await uploadTask.upload();
        return response;
    } catch (err) {
        console.log(err);
    }
}
//uploadFile1();

async function uploadFile() {

    let fileName = "test.txt";
    let size = "";
    var stats = fs.statSync("test.txt")
   
        console.log(stats.fileName);
   
    const file = new MicrosoftGraph.StreamUpload(fs.createReadStream("./test.txt"),fileName, stats.size);
    try {
        let options = {
            path: "/Documents",
            fileName,
            rangeSize: 1024 * 1024,
        };

        const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.createTaskWithFileObject(client, file, options);
        //const uploadSession = await uploadTask.cr
        const response = await uploadTask.upload();
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
    }
}
//uploadFile();


//file upload test 
function uploadFile2() {
    fs.readFile("./test.txt", {}, function(err, file) {
        if (err) {
            throw err;
        }
        let fileName = "test.txt";
        oneDriveLargeFileUpload2(client, file, fileName)
            .then((response) => {
                console.log(response);
                console.log("File Uploaded Successfully.!!");
            })
            .catch((error) => {
                throw error;
            });
    });
}
async function oneDriveLargeFileUpload2(client, file, fileName) {
    var stats = fs.statSync("./test.txt")
    try {
        let options = {
            path: "/Documents",
            fileName,
            rangeSize: 1024 * 1024,
        };
        const fileObj = new MicrosoftGraph.FileUpload(file,fileName, stats.size);
        const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.createTaskWithFileObject(client, fileObj, options);
        const response = await uploadTask.upload();
        return response;
    } catch (err) {
        console.log(err);
    }
}
//uploadFile2();

function up() {
    fs.readFile("./test.txt", {}, function(err, file) {
        if (err) {
            throw err;
        }
        //let fileName = "test.txt";
        up2()
            .then((response) => {
                console.log(response);
                console.log("File Uploaded Successfully.!!");
            })
            .catch((error) => {
                throw error;
            });
    });
}
async function up2() {

    const totalsize = 6;
    const sliceSize = 20;
    const buf = Buffer.alloc(totalsize, "a");
    const readStream = new stream.Readable({
        read() {
            this.push(buf);
            this.push(null);
        },
    });
    const f = "Test_File_Name";

const upload = new MicrosoftGraph.StreamUpload(readStream, f, totalsize);

const slice = await upload.sliceFile({ minValue: 0, maxValue: sliceSize - 1 });
}
up();
//uploadFile2();


// Get the name of the authenticated user with promises
// client
// 	.api("/me")
// 	.select("displayName")
// 	.get()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

/*

// Update the authenticated users birthday.
client
    .api('/me')
    .header("content-type", "application/json")
    .update({
        "birthday": "1908-12-22T00:00:00Z"
    })
    .then((res) => {
        console.log("Updated my birthday");
    })
    .catch((err) => {
        console.log(err);
    });

// GET /users
client
    .api('/users')
    .version('beta')
    .get()
    .then((res) => {
        console.log("Found", res.value.length, "users");
    })
    .catch((err) => {
        console.log(err);
    });

// Find my top 5 contacts on the beta endpoint
client
    .api('/me/people')
    .version('beta')
    .top(5)
    .select("displayName")
    .get()
    .then((res) => {
        const topContacts = res.value.map((u) => {
            return u.displayName
        });
        console.log("Your top contacts are", topContacts.join(", "));
    })
    .catch((err) => {
        console.log(err);
    });

// send an email
const mail = {
    subject: "MicrosoftGraph JavaScript SDK Samples",
    toRecipients: [{
        emailAddress: {
            address: "<TO_EMAIL_ADDRESS>"
        }
    }],
    body: {
        content: "<h1>MicrosoftGraph TypeScript Connect Sample</h1><br>https://github.com/microsoftgraph/msgraph-sdk-javascript",
        contentType: "html"
    }
}

client
    .api('/users/me/sendMail')
    .post({
        message: mail
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// GET 3 of my events
client
    .api('/me/events')
    .top(3)
    .get()
    .then((res) => {
        let upcomingEventNames = []
        for (let i = 0; i < res.value.length; i++) {
            upcomingEventNames.push(res.value[i].subject);
        }
        console.log("My calendar events include", upcomingEventNames.join(", "))
    })
    .catch((err) => {
        console.log(err);
    });

// Download a file from OneDrive
client
    .api('/me/drive/items/<ITEM_ID>/content')
    .getStream()
    .then((stream) => {
        let writeStream = fs.createWriteStream(`<FILE_NAME_WITH_EXTENSION>`);
        stream.pipe(writeStream).on('error', err => {
            console.log(err);
        });
        writeStream.on('finish', () => {
            console.log("finish");
        });
        writeStream.on('error', err => {
            console.log(err);
        });
    })
    .catch((err) => {
        console.log(err);
    });

// Upload a file to OneDrive
let readStream = fs.createReadStream("<FILE_PATH>");
client
    .api('/me/drive/root/children/<FILE_NAME_WITH_EXTENSION>/content')
    .putStream(readStream)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
*/
