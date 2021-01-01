# [Batching](https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching)

Batching is a way of combining multiple requests to resources in same/different workloads in a single HTTP request. This can be achieved by making a post call with those requests as a JSON payload to \$batch endpoint.

## BatchRequestContent

A component which eases the way of creating batch request payload. This class handles all the batch specific payload construction and stuffs, we just need to worry about individual requests.

## BatchResponseContent

A Component to simplify the processing of batch responses by providing functionalities like getResponses, getResponseById, getResponsesIterator

### Update the profile photo and download the uploaded photo with batching - Making serial requests

```typescript
// elem here is the input HTML element of type file
const serialBatching = async function(elem) {
	try {
		let file = elem.files[0];
		let uploadProfilePhotoRequest = new Request("/me/photo/$value", {
			method: "PUT",
			headers: {
				"Content-type": file.type,
			},
			body: file,
		});

		let uploadProfilePhotoStep: BatchRequestStep = {
			id: "1",
			request: uploadProfilePhotoRequest,
		};

		let downloadProfilePhotoRequest = new Request("/me/photo/$value", {
			method: "GET",
		});

		let downloadId = "2";
		let downloadProfilePhotoStep: BatchRequestStep = {
			id: downloadId,
			request: downloadProfilePhotoRequest,
			// Adding dependsOn makes this request wait until the dependency finishes
			// This download request waits until the upload request completes
			dependsOn: ["1"],
		};

		//Create instance by passing a batch request step
		let batchRequestContent = new MicrosoftGraph.BatchRequestContent([uploadProfilePhotoStep, downloadProfilePhotoStep]);

		//Extracting content from the instance
		let content = await batchRequestContent.getContent();

		//Making call to $batch end point with the extracted content
		let response = await client.api("/$batch").post(content);

		//Create instance with response from the batch request
		let batchResponseContent = new MicrosoftGraph.BatchResponseContent(response);

		//Getting response by id
		console.log(batchResponseContent.getResponseById(downloadId));

		//Getting all the responses
		console.log(batchResponseContent.getResponses());
	} catch (error) {
		console.error(error);
	}
};
```

### Download multiple profile photos with batching and preprocess these for rendering in a browser 

You should convert the downloaded photos through batching to a Base64 representation if you want to render these in a browser.

```typescript
  b64toBlob = async (b64Data:any, contentType:string, sliceSize?:number):Promise<Blob>  => {
    contentType = contentType || 'image/png';
    sliceSize = sliceSize || 512;
  
    let byteCharacters:string = atob(b64Data);
    let byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
  
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
      }
  
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    let blob = new Blob(byteArrays, {type: contentType});
    return blob;
  };
  
  blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = _ => {
        resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
    });
  };

  downloadPhotosBatching = async (client: Client) => {
    try {
      let users = ["user1@contoso.com", "user2@contoso.com"]
  
      // create batch request steps for the users specified above
      const batchRequestSteps : BatchRequestStep[] = users.map((userId) => {
        const request : BatchRequestStep = {
          id: userId,
          request: new Request(`/users/${userId}/photo/$value`, {
            method: "GET",
          })
        };
        return request;
      })
  
      // initiate the batchrequest and execute the operation
      const batchRequestContent = new BatchRequestContent(batchRequestSteps);
      const content = await batchRequestContent.getContent();
      const batchResponse = new BatchResponseContent(await client.api("/$batch").post(content));
  
      // example on how to retrieve the base64 representation of the downloaded image for the first user
      const response = batchResponse.getResponseById(users[0]);
      if (response.ok) {
        var data = await response.text();
        const _binToBlob = await this.b64toBlob((data),'img/jpg');
        
        // you can associate the base64 output to an src attribute of an <img> HTML tag
        const base64Result = await this.blobToBase64(binToBlob);
        console.log(base64Result);
      }
    } catch (error) {
      console.error(error);
    }
  };
```

### GET and POST contents from and to different workloads - Making parallel requests

```typescript
const parallelBatching = async function() {
	try {
		let fileName = "test.pdf";
		let oneDriveFileRequest = new Request(`/me/drive/root:/${fileName}:/content`, {
			method: "GET",
		});

		let oneDriveFileStep: BatchRequestStep = {
			id: "1",
			request: oneDriveFileRequest,
		};

		let folderDetails = {
			name: "Testing Batch",
			folder: {},
		};
		let createFolder = new Request("/me/drive/root/children", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(folderDetails),
		});

		let createFolderStep: BatchRequestStep = {
			id: "2",
			request: createFolder,
			dependsOn: ["1"],
		};

		let mailsRequest = new Request("/me/messages", {
			method: "GET",
		});

		let mailsRequestStep: BatchRequestStep = {
			id: "3",
			request: mailsRequest,
			dependsOn: ["2"],
		};

		//Create instance by passing a batch request step
		let batchRequestContent = new MicrosoftGraph.BatchRequestContent();

		// Dynamically adding requests to the batch content
		let fileDownloadId = batchRequestContent.addRequest(oneDriveFileStep);

		let createFolderId = batchRequestContent.addRequest(createFolderStep);

		let mailsId = batchRequestContent.addRequest(mailsRequestStep);

		// Dynamically removing unnecessary dependencies
		// NOTE: Passing second param empty removes all the dependencies for that request
		batchRequestContent.removeDependency("3", "2");

		// Dynamically removing unnecessary request. Removing a request automatically removes the dependencies in relevant dependents
		// Here download file dependency is removed from the onedrive create folder request
		batchRequestContent.removeRequest(fileDownloadId);

		// Now no requests depends on anything so the request will be made parallel in the service end
		// Extracting content from the instance
		let content = await batchRequestContent.getContent();

		//Making call to $batch end point with the extracted content
		let response = await client.api("/$batch").post(content);

		//Create instance with response from the batch request
		let batchResponse = new MicrosoftGraph.BatchResponseContent(response);

		//Getting iterator and looping through the responses iterator
		let iterator = batchResponse.getResponsesIterator();
		let data = iterator.next();
		while (!data.done) {
			console.log(data.value[0] + ":" + data.value[1]);
			data = iterator.next();
		}
	} catch (error) {
		console.error(error);
	}
};
```

### Create a folder in OneDrive and upload multiple files - Making batch request with all other request depend on one request

```typescript
// elem here is the input HTML element of type file
const sameBatching = async function(elem) {
	try {
		let file1 = elem.files[0];
		let file2 = elem.files[1];

		let folderDetails = {
			name: "MyFiles",
			folder: {},
		};
		let createFolder = new Request("/me/drive/root/children", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(folderDetails),
		});

		let createFolderStep: BatchRequestStep = {
			id: "1",
			request: createFolder,
		};

		let uploadFileRequest1 = new Request(`/me/drive/root:/MyFiles/${file1.name}:/content`, {
			method: "PUT",
			headers: {
				"Content-type": file1.type,
			},
			body: file1,
		});

		let uploadFileStep1: BatchRequestStep = {
			id: "2",
			request: uploadFileRequest1,
			dependsOn: ["1"],
		};

		let uploadFileRequest2 = new Request(`/me/drive/root:/MyFiles/${file2.name}:/content`, {
			method: "PUT",
			headers: {
				"Content-type": file2.type,
			},
			body: file2,
		});

		let uploadFileStep2: BatchRequestStep = {
			id: "3",
			request: uploadFileRequest2,
			dependsOn: ["1"],
		};

		let batchRequestContent = new MicrosoftGraph.BatchRequestContent([createFolderStep, uploadFileStep1, uploadFileStep2]);

		let content = await batchRequestContent.getContent();

		let response = await client.api("/$batch").post(content);
		let batchResponseContent = new MicrosoftGraph.BatchResponseContent(response);
		console.log(batchResponseContent.getResponses());
	} catch (error) {
		console.error(error);
	}
};
```

## Constraints

Refer, [JSON Batching](https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching), [Known Issues](https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching) documents for current constraints in the batching
