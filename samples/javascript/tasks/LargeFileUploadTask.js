
const { client } = require("../clientInitialization/ClientWithOptions");
/**
 * OR
 * const { client } = require("../clientInitialization/TokenCredentialAuthenticationProvider");
 * OR 
 * require or import client created using an custom authentication provider
 */
 const fs = require("fs");
const { LargeFileUploadTask } = require("@microsoft/microsoft-graph-types");
require("isomorphic-fetch");

async function upload() {
    const fileName = "FILE_NAME"
    const file = fs.createReadStream(`./${fileName}`);

    const stats = fs.statSync(`./${fileName}`);
    const totalsize = stats.size;

    const progress = (range, extraCallbackParam) => {
        // Implement the progress callback here
        console.log('uploading range: ', range);
        console.log(extraCallbackParam);
    };

    const uploadEventHandlers = {
        progress,
        extraCallbackParam: "Any paramater needed by the callback implementation"
    };

    const options = {
        rangeSize: 1024 * 1024,
        uploadEventHandlers,
    };

    // Create upload session for OneDrive or SharePoint Upload"
    const payload = {
        "item": {
            "@microsoft.graph.conflictBehavior": "rename"
        }
    }

    const uploadSession = await new LargeFileUploadTask.createUploadSession(client, "https://graph.microsoft.com/v1.0/sites/root/drive/items/{item-id}/createuploadsession", payload);

    // OR
    // Create upload session for Outlook API  
    // const uploadSessionURL = `me/messages/${messageId}/attachments/createUploadSession`;
    // const payload = {
    //     AttachmentItem: {
    //         attachmentType: 'file',
    //         name: "FILE_NAME",
    //         size: totalsize,
    //     }
    // }

    const fileObject = new StreamUpload(file, fileName, totalsize);

    //OR
    // You can also use a FileUpload instance
    //const file = fs.readFileSync();
    //const fileObject = new FileUpload(file, fileName, totalsize);

    //OR
    // You can also create an object from a custom implementation of the FileObject interface
    const file = new File(file)
    const task = new MicrosoftGraph.LargeFileUploadTask(client, fileObject, uploadSession, options);
    const uploadResult = await task.upload();
    return uploadResult;
}

upload()
    .then((uploadResult) => console.log(uploadResult))
    .catch((error) => console.log(error));