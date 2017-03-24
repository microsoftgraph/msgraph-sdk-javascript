// when using the npm module, use the following syntax
// var MicrosoftGraph = require("@microsoft/microsoft-graph-client").Client;

// for fast development, simply require the generated lib without bundling the npm module

const MicrosoftGraph = require("../../lib/src/index.js").Client;

const secrets = require("./secrets");

const client = MicrosoftGraph.init({
    defaultVersion: 'v1.0',
    debugLogging: true,
    authProvider: (done) => {
        done(null, secrets.accessToken);
    }
});

// Get the name of the authenticated user with callbacks
client
    .api('/me')
    .select("displayName")
    .get((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(res.displayName);
    });

/*
// Get the name of the authenticated user with promises
client
    .api('/me')
    .select("displayName")
    .get()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

// Update the authenticated users birthday.
client
    .api('/me')
    .update(
        {"birthday": "1908-12-22T00:00:00Z"},
        (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Updated my birthday");
        }
    );


// GET /users
client
    .api('/users')
    .version('beta')
    .get((err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Found", res.value.length, "users");
    });

// Find my top 5 contacts on the beta endpoint
client
    .api('/me/people')
    .version('beta')
    .top(5)
    .select("displayName")
    .get((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        const topContacts = res.value.map((u) => {return u.displayName});
        console.log("Your top contacts are", topContacts.join(", "));
    });    


// Use promises instead of callbacks
// .get() returns a Promise
client
    .api('/me')
    .select("displayName")
    .get()
    .then((res) => {
        console.log(res.displayName);
    })
    .catch(console.error);
    
// Find my top 5 contacts on the beta endpoint
// .select() can be called multiple times
client
    .api('/me/people')
    .top(5)
    .version('beta')
    .select("displayName")
    .select("title") // or call with .select(["displayName", "title"]) or .select("displayName", "title")
    .get((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(res.value[0].title, res.value[0].displayName);
    });


// send an email
const mail = {
    subject: "MicrosoftGraph JavaScript SDK Samples",
    toRecipients: [{
        emailAddress: {
            address: "example@example.com"
        }
    }],
    body: {
        content: "<h1>MicrosoftGraph TypeScript Connect Sample</h1><br>https://github.com/microsoftgraph/msgraph-sdk-javascript",
        contentType: "html"
    }
}

client
    .api('/users/me/sendMail')
    .post(
        {message: mail},
        (err, res) => {
            if (err)
                console.log(err);
            else
                console.log("Sent an email");
        })

// GET 3 of my events
client
    .api('/me/events')
    .top(3)
    .get((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        var upcomingEventNames = []
        for (var i=0; i<res.value.length; i++) {
            upcomingEventNames.push(res.value[i].subject);
        }
        console.log("My calendar events include", upcomingEventNames.join(", "))
    })


// URL substitution example
let userIds = [secrets.userId1,
               secrets.userId2];

for (let i=0; i<userIds.length; i++) {
    let fetchUser = client
        .api(`/me/people/${userIds[i]}`)
        .version('beta')
        .select('displayName')
        .get((err, res) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(res.displayName)
        })
}

// Find my top 5 contacts
client
    .api('/me/people')
    .version('beta')
    .top(5)
    .select("displayName")
    .select("id")
    .get((err, res) => {
        console.log(res)
    });




client
    .api("/users")
    .filter("startswith(displayName, 'david')")
    .get((err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res)
    })


// custom header example
client
    .api('/me')
    .select("displayName")
    .header('foo1', 'bar1')
    .headers({'foo2': 'bar2'}) //.headers() for object, .header() for 2 params
    .headers({'foo3': 'bar3', 'foo4': 'bar4'})
    .get((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
    });

// delete a OneDrive item
client
    .api(`/me/drive/items/${secrets.ONE_DRIVE_FILE_ID_TO_DELETE}`)
    .delete((err, res) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(res)
    })


// Download a file from OneDrive
let fs = require('fs'); // requires filesystem module
client
    .api('/me/drive/root/children/Book.xlsx/content')
    .getStream((err, downloadStream) => {
        if (err) {
            console.log(err);
            return;
        }
        let writeStream = fs.createWriteStream('../Book1.xlsx');
        downloadStream.pipe(writeStream).on('error', console.log);
    });

// Upload a file to OneDrive
let photoReadStream = fs.createReadStream('../logo.png');
client
    .api('/me/drive/root/children/logo234.png/content')
    .putStream(photoReadStream, (err) => {
        console.log(err);
    });

// Download my photo
client
    .api('https://graph.microsoft.com/v1.0/me/photo/$value')
    .getStream((err, downloadStream) => {
        let writeStream = fs.createWriteStream('../myPhoto.jpg');
        downloadStream.pipe(writeStream).on('error', console.log);
    });

// Update my photo
let profilePhotoReadStream = fs.createReadStream('me.jpg');

client
    .api('/me/photo/$value')
    .putStream(profilePhotoReadStream, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });


*/
