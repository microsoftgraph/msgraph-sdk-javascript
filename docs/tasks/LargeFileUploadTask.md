# Large File Upload Task - Uploading large files to OneDrive.

This task simplifies the implementation of onedrive's [resumable upload](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/driveitem_createuploadsession).

## Creating the client instance

Refer [this documentation](../CreatingClientInstance.md) for initializing the client.

## Uploading from browser

HTML to select the file for uploading.

```HTML
<input id="fileUpload" type="file" onchange="fileUpload(this)" />
```

Get files from the input element and start uploading.

```typescript
async function fileUpload(elem) {
    let file = elem.files[0];
    try {
        let response = await largeFilUpload(client, file, file.name);
    } catch (error) {
        console.error(error);
    }
}
```

## Uploading from NodeJS

```typescript
function uploadFile() {
    fs.readFile(<PATH_OF_THE_FILE>, {}, function (err, file) {
        if(err) {
            throw err;
        }
        let fileName = <NAME_OF_THE_FILE>;
        largeFileUpload(client, file, fileName)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
    });
}
```

## Creating session and start uploading

```typescript
async function uploadFile(client, file) {
    try {
        let options = {
            path: "/Documents",
            fileName: file.name,
            rangeSize: (1024 * 1024)
        };
        const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.create(client, file, options);
        const response = await uploadTask.upload();
        console.log(response);
        console.log("File Uploaded Successfully.!!");
    } catch (err) {
        console.log(err);
    }
}
```

## We can just resume the broken upload

_Lets consider some break down happens in the middle of uploading, with the uploadTask object in hand you can resume easily._

```typescript
uploadTask.resume();
```

## Even you can control the whole upload process

_You can create the upload task, and play with it by using **sliceFile** and **uploadSlice** methods_

```typescript
let range = uploadTask.getNextRange();
let slicedFile = uploadTask.sliceFile(range);
uploadTask.uploadSlice(slicedFile, range, uploadTask.file.size);
```