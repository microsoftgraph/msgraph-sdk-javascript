# Actions

## GET

You can get information from the graph using `.get()`.

Getting user details

```typescript
try {
	let res = await client.api("/me").get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## GETSTREAM

You can download information from the graph using NodeJS streams with `.getStream()`.

Downloading a file from OneDrive

```typescript
const fs = require("fs");
client
	.api("/me/drive/root/children/<FILE_NAME>/content")
	.getStream() //Eg: test.pdf
	.then((stream) => {
		let writeStream = fs.createWriteStream(`../<DOWNLOAD_FILE_NAME>`); // Eg: test.pdf
		stream.pipe(writeStream).on("error", (err) => {
			throw err;
		});
		writeStream.on("finish", () => {
			console.log("Downloaded");
		});
		writeStream.on("error", (err) => {
			throw err;
		});
	})
	.catch((error) => {
		throw error;
	});
```

## POST

You can submit a content to the graph using `.post()`/`.create()`, this takes object as a param that will be sent as content of the request.

Sending an email to the recipients

```typescript
const mail = {
	subject: "Microsoft Graph JavaScript Sample",
	toRecipients: [
		{
			emailAddress: {
				address: "example@example.com",
			},
		},
	],
	body: {
		content: "<h1>MicrosoftGraph JavaScript </h1>Check out https://github.com/microsoftgraph/msgraph-sdk-javascript",
		contentType: "html",
	},
};
try {
	let res = await client.api("/me/sendMail").post({ message: mail });
	console.log(res);
} catch (error) {
	console.error(error);
}
```

## PATCH

You can partially modify the resource in graph using `.patch()`/`.update()`, which takes object as a param that will be sent as content of the request.

Updating the birthday information for a contact

```typescript
let contactId = "<CONTACT_ID_TO_UPDATE>";
let contactInfo = {
	birthday: "1991-07-22",
};
try {
	let res = await client.api(`/me/contacts/${contactId}`).patch(contactInfo);
	console.log(res);
} catch (error) {
	console.error(error);
}
```

## DELETE

You can delete a resource in graph using `.delete()`/`.del()`.

Deleting the file in OneDrive

```typescript
try {
	let res = await client.api(`/me/drive/items/${ONE_DRIVE_FILE_ID_TO_DELETE}`).delete();
	console.log(res);
} catch (error) {
	console.error(error);
}
```

## PUT

You can replace resources in graph using `.put()`.

Updating profile picture from a HTML input form

```typescript
let file; // FileObject retrieved from the HTML input type=file
try {
	let res = await client.api("/me/photo/$value").put(file);
	console.log(res);
} catch (error) {
	throw error;
}
```

## PUTSTREAM

You can replace resources in graph using NodeJS streams with `.putStream()`.

Uploading a file to OneDrive

```typescript
let fs = require("fs");
try {
	let stream = fs.createReadStream("<PATH_TO_LOCAL_FILE>"); // Eg: "./test.jpg"
	let res = await client.api(`/me/drive/root/children/<FILE_NAME>/content`); // Eg: /me/drive/root/children/test.jpg/content
	console.log(res);
} catch (error) {
	throw error;
}
```
