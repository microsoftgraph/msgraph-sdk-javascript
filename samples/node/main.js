// when using the npm module, use the following syntax
// const MicrosoftGraph = require("@microsoft/microsoft-graph-client").Client;

// for fast development, simply require the generated lib without bundling the npm module

require("isomorphic-fetch");

const MicrosoftGraph = require("../../lib/src/index.js");

const secrets = require("./secrets");

const fs = require('fs');

const client = MicrosoftGraph.Client.init({
    defaultVersion: "v1.0",
    debugLogging: true,
    authProvider: (done) => {
        done(null, secrets.accessToken);
    },
});

function uploadFile1() {
    fs.readFile("./test.txt", {}, function(err, file) {
        if (err) {
            throw err;
        }
        let fileName = "text.txt";
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
uploadFile1();

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


//uploadFile();
function uploadFile() {
    fs.readFile("./test.txt", {}, function (err, file) {
        if (err) {
            throw err;
        }
        var stats = fs.statSync("./test.txt")

        const messageId = "AAMkADZiNzhhNTVkLWU5MDEtNGNlNy1hMjZiLTJjN2RkNjcyNGM4NgBGAAAAAABxs3khvJ1fSYvq33QgqqSJBwBC_D0Xqz_3TKBt1JyxMQ_VAAAAAAEMAABC_D0Xqz_3TKBt1JyxMQ_VAACGMDZTAAA=";
        client.api(`me/messages/${messageId}/attachments/createUploadSession`).post({
            AttachmentItem: {
                attachmentType: 'file',
                name: "test.txt",
                size: stats.size,
            }
        })
            .then((response) => {
                console.log(response);

                console.log("File Uploaded Successfully.!!");
                oneDriveLargeFileUpload(client, file, response)
                    .then((res) => {
                        console.log(res);
                        console.log("File Uploaded Successfully.!!");
                    })
                    .catch((error) => {
                        throw error;
                    });
            })
            .catch((error) => {
                console.log(".!!");
                console.log(error);
            });

    });
}

async function oneDriveLargeFileUpload(client, file, uploadSession) {
    try {
        let fileName = "test.txt";
        let options = {
            path: "/Documents",
            fileName,
            rangeSize: 1024 * 1024,
        };
        const s = {
            url:uploadSession.uploadUrl,
            expiry: uploadSession.expirationDateTime
        }
        console.log("uploadSession");
        const uploadTask = new MicrosoftGraph.LargeFileUploadTask(client, file, s, options);
        console.log(uploadTask+"uploadTask");
        const response = await uploadTask.upload();
        return response;
    } catch (err) {
        console.log(err);
    }
}
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
