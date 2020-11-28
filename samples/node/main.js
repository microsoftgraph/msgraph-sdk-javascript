// when using the npm module, use the following syntax
// const MicrosoftGraph = require("@microsoft/microsoft-graph-client").Client;

// for fast development, simply require the generated lib without bundling the npm module

require("isomorphic-fetch");

const MicrosoftGraph = require("../../lib/src/index.js");

const secrets = require("./secrets");
const moment = require("moment");
const fs = require("fs");
const { BatchResponseContent } = require("../../lib/src/index.js");

const client = MicrosoftGraph.Client.init({
	defaultVersion: "v1.0",
	debugLogging: true,
	authProvider: (done) => {
		done(null, secrets.accessToken);
	},
});
//client.api("https://graph.microsoft.com/beta/users?$whatif").get();;
function uploadFile() {
	// client.api('/me/drive/root/children').get().then((response) => {
	// 				console.log(response);
	// 				console.log("File Uploaded Successfully.!!");
	// 			}).catch((error) => {
	// 				console.log(error);
	// 			});

	fs.readFile("./sample.png", {}, function(err, file) {
		if (err) {
			throw err;
		}
		let fileName = "sample.png";
		oneDriveLargeFileUpload(client, file, fileName)
			.then((response) => {
				console.log(response);
				console.log("File Uploaded Successfully.!!");
			})
			.catch((error) => {
				throw error;
			});
	});
}

async function oneDriveLargeFileUpload(client, file, fileName) {
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
uploadFile();
// let readStream = fs.createReadStream("../../sample.png");
// client
//     .api('/me/drive/root/children/sample.png/content')
//     .putStream(readStream)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Get the name of the authenticated user with promises
// client
// 	.api("/me/drive/root/children")
// 	.get()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
const s = {
	attendees: [
		{
			emailAddress: {
				address: "nikitha9090@hotmail.com",
				name: "Alex Darrow",
			},
			type: "Required",
		},
	],
	timeConstraint: {
		timeslots: [
			{
				start: {
					dateTime: "2020-11-18T08:37:44.203Z",
					timeZone: "Pacific Standard Time",
				},
				end: {
					dateTime: "2020-11-25T08:37:44.203Z",
					timeZone: "Pacific Standard Time",
				},
			},
		],
	},
	locationConstraint: {
		isRequired: "false",
		suggestLocation: "true",
		locations: [
			{
				displayName: "Conf Room 32/1368",
				locationEmailAddress: "conf32room1368@imgeek.onmicrosoft.com",
			},
		],
	},
	meetingDuration: "PT1H",
};

// // Get the name of the authenticated user with promises
// client
// 	.api("/me/findMeetingTimes")
// 	.post(s)
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
//     });

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
//     });
testfunc()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
async function testfunc() {
	console.log("dfd");
	// Create a batch request step to GET /me
	let userRequestStep = {
		id: "1",
		request: new Request("/me", {
			method: "GET",
		}),
	};
	let userRequestStep2 = {
		id: "2",
		request: new Request("/https://graph.microsoft.com/v1.0/me/people/?$search=j", {
			method: "GET",
		}),
	};
	let today = moment({ hour: 0, minute: 0, seconds: 0 });

	// Create a batch request step to add an event
	let newEvent = {
		subject: "File end-of-day report",
		start: {
			// 5:00 PM
			dateTime: today.add(17, "hours").format("YYYY-MM-DDTHH:mm:ss"),
			timeZone: "UTC",
		},
		end: {
			// 5:30 PM
			dateTime: today
				.add(17, "hours")
				.add(30, "minutes")
				.format("YYYY-MM-DDTHH:mm:ss"),
			timeZone: "UTC",
		},
	};

	let addEventRequestStep = {
		id: "2",
		// This step will happen after step 1
		dependsOn: ["1"],
		request: new Request("/me/events", {
			method: "POST",
			body: JSON.stringify(newEvent),
			headers: {
				"Content-Type": "application/json",
			},
		}),
	};
	const s = {
		attendees: [
			{
				emailAddress: {
					address: "nikitha9090@hotmail.com",
					name: "Alex Darrow",
				},
				type: "Required",
			},
		],
		timeConstraint: {
			timeslots: [
				{
					start: {
						dateTime: "2020-11-18T08:37:44.203Z",
						timeZone: "Pacific Standard Time",
					},
					end: {
						dateTime: "2020-11-25T08:37:44.203Z",
						timeZone: "Pacific Standard Time",
					},
				},
			],
		},
		locationConstraint: {
			isRequired: "false",
			suggestLocation: "true",
			locations: [
				{
					displayName: "Conf Room 32/1368",
					locationEmailAddress: "conf32room1368@imgeek.onmicrosoft.com",
				},
			],
		},
		meetingDuration: "PT1H",
	};
	//   let addEventRequestStep = {
	//     id: "2",
	//     // This step will happen after step 1
	//     dependsOn: [ "1" ],
	//     request: new Request("/me/findMeetingTimes", {
	//       method: "POST",
	//       body: JSON.stringify(s),
	//       headers: {
	//         "Content-Type": "application/json"
	//       }
	//     })
	//   }

	// Create the batch request content with the steps created
	// above
	let batchRequestContent = new MicrosoftGraph.BatchRequestContent([userRequestStep, addEventRequestStep]);
	console.log(batchRequestContent);
	let content = await batchRequestContent.getContent();
	console.log(content);
	// POST the batch request content to the /$batch endpoint
	let batchResponse = await client.api("/$batch").post(content);
	console.log(" console.log(batchResponse);");
	console.log(batchResponse);
	const response = new BatchResponseContent(batchResponse);
	// Get the create event response by id
	let newEventResponse = response.getResponseById("2");
	console.log(newEventResponse);
	if (!newEventResponse.ok) {
		console.log("newEventResponse");
		let error = await newEventResponse.json();
		console.log(error);
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
