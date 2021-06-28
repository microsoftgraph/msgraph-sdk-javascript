
import { client } from "../clientInitialization/ClientWithOptions";
/**
 * OR
 * import { client } from ("../clientInitialization/TokenCredentialAuthenticationProvider");
 * OR 
 * require or import client created using an custom authentication provider
 */
import * as fs from "fs";
import { LargeFileUploadTaskOptions, LargeFileUploadSession, LargeFileUploadTask, StreamUpload, UploadEventHandlers,UploadResult, Range, FileUpload} from "@microsoft/microsoft-graph-client";

async function upload(): Promise<UploadResult> {

    const file = fs.createReadStream('./test.pdf');

    const stats = fs.statSync(`./test.pdf`);
    const totalsize = stats.size;

    const progress = (range?: Range, extraCallbackParam?: unknown) => {
        // Implement the progress callback here

        console.log('uploading range: ', range);
        console.log(extraCallbackParam);
    };

    const uploadEventHandlers: UploadEventHandlers = {
        progress,
        extraCallbackParam: "any paramater needed by the callback implementation"
    };

    const options: LargeFileUploadTaskOptions = {
        rangeSize: 1024 * 1024,
        uploadEventHandlers,
    };

    // Create upload session for OneDrive or SharePoint Upload"
    const payload = {
        "item": {
            "@microsoft.graph.conflictBehavior": "rename"
        }
    }

    const uploadSession: LargeFileUploadSession = await LargeFileUploadTask.createUploadSession(client, "https://graph.microsoft.com/v1.0/sites/root/drive/items/{item-id}/createuploadsession", payload);

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

    const fileObject = new StreamUpload(file, 'test.pdf', totalsize);
 
    //OR
    // You can also use a FileUpload instance
    //const file = fs.readFileSync();
    //const fileObject = new FileUpload(file, 'test.pdf', totalsize);

    //OR
    // You can also create an object from a custom implementation of FileObject    
    const task = new LargeFileUploadTask(client, fileObject, uploadSession, options);
    const uploadResult = await task.upload();
    return uploadResult;
}

upload()
    .then((uploadResult) => console.log(uploadResult))
    .catch((error) => console.log(error));