# [Batching](https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching)
Batching is a way of combining multiple requests to resources in same/different workloads in a single HTTP request. This can be achieved by making a post call with those requests as a JSON payload to $batch endpoint.

### BatchRequestContent
A component which eases the way of creating batch request payload. This class handles all the batch specific payload construction and stuffs, we just need to worry about individual requests.

### BatchResponseContent
A Component to simplify the processing of batch responses by providing functionalities like getResponses, getResponseById, getResponsesIterator

**Update the profile photo and download the uploaded photo with batching - Making serial requests**
```typescript
// elem here is the input HTML element of type file
const serialBatching = async function(elem) {
    try {
        let file = elem.files[0];
        let uploadProfilePhotoRequest = new Request("/me/photo/$value", {
            method: "PUT",
            headers: {
                "Content-type": file.type
            },
            body: file
        });

        let uploadProfilePhotoStep: BatchRequestStep = {
            id: "1",
            request: uploadProfilePhotoRequest
        };

        let downloadProfilePhotoRequest = new Request("/me/photo/$value", {
            method: "GET"
        });
        
        let downloadId = "2";
        let downloadProfilePhotoStep: BatchRequestStep = {
            id: downloadId,
            request: downloadProfilePhotoRequest,
            // Adding dependsOn makes this request wait until the dependency finishes
            // This download request waits until the upload request completes
            dependsOn: ["1"]
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
        console.log(batchResponse.getResponseById(downloadId));
        
        //Getting all the responses
        console.log(batchResponseContent.getResponses());
    } catch (error) {
        console.error(error);
    }
};

```

**GET and POST contents from and to different workloads - Making parallel requests**

```typescript
const parallelBatching = async function() {
    try {
        let fileName = "test.pdf";
        let oneDriveFileRequest = new Request(`/me/drive/root:/${fileName}:/content`, {
            method: "GET"
        });

        let oneDriveFileStep: BatchRequestStep = {
            id: "1",
            request: oneDriveFileRequest
        };

        let folderDetails = {
            "name": "Testing Batch",
            "folder": {}
        };
        let createFolder = new Request("/me/drive/root/children", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(folderDetails)
        });

        let createFolderStep: BatchRequestStep = {
            id: "2",
            request: createFolder,
            dependsOn: ["1"]
        };

        let mailsRequest = new Request("/me/messages", {
            method: "GET"
        });

        let mailsRequestStep: BatchRequestStep = {
            id: "3",
            request: mailsRequest,
            dependsOn: ["2"]
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

**Create a folder in OneDrive and upload multiple files - Making batch request with all other request depend on one request**

```typescript
// elem here is the input HTML element of type file
const sameBatching = async function (elem) {
    try {
        let file1 = elem.files[0];
        let file2 = elem.files[1];

        let folderDetails = {
            "name": "MyFiles",
            "folder": {}
        };
        let createFolder = new Request("/me/drive/root/children", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(folderDetails)
        });
        
        let createFolderStep: BatchRequestStep = {
            id: "1",
            request: createFolder
        };

        let uploadFileRequest1 = new Request(`/me/drive/root:/MyFiles/${file1.name}:/content`, {
            method: "PUT",
            headers: {
                "Content-type": file1.type
            },
            body: file1
        });

        let uploadFileStep1: BatchRequestStep = {
            id: "2",
            request: uploadFileRequest1,
            dependsOn: ["1"]
        };

        let uploadFileRequest2 = new Request(`/me/drive/root:/MyFiles/${file2.name}:/content`, {
            method: "PUT",
            headers: {
                "Content-type": file2.type
            },
            body: file2
        });

        let uploadFileStep2: BatchRequestStep = {
            id: "3",
            request: uploadFileRequest2,
            dependsOn: ["1"]
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

### Constraints
Refer these [#1](https://developer.microsoft.com/en-us/graph/docs/concepts/json_batching), [#2](https://developer.microsoft.com/en-us/graph/docs/concepts/known_issues#json-batching) documents for current constraints in the batching

