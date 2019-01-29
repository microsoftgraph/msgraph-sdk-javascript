let request = {
    getDisplayName: async () => {
        try {
            let response = await client.api("/me").select("displayName").get();
            return response.displayName;
        } catch (error) {
            console.error(error);
        }
    },

    getProfilePicture: async () => {
        try {
            let response = await client.api("/me/photo/$value").responseType(MicrosoftGraph.ResponseType.BLOB).get();
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    updateProfilePicture: async () => {
        let file = document.getElementById("uploadProfile").files[0],
            reader = new FileReader();

        reader.addEventListener("load", () => {
            client
                .api("/me/photo/$value")
                .responseType(MicrosoftGraph.ResponseType.BLOB)
                .put(file)
                .then((res) => {
                    request.getProfilePicture()
                        .then((blob) => {
                            ui.setProfilePicture(blob);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                })
                .catch((error) => {
                    console.error(error);
                });
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    },

    getUserDetails: async () => {
        try {
            let res = await client.api("/me").get();
            return res;
        } catch (error) {
            throw (error);
        }
    },

    getMyDriveFiles: async () => {
        try {
            let res = await client.api("/me/drive/root/children").get();
            return res;
        } catch (error) {
            throw error;
        }
    },

    getMyMails: async () => {
        try {
            let res = await client.api("/me/messages").get();
            return res;
        } catch (error) {
            throw error;
        }
    },

    uploadLargeFile: async () => {
        let file = document.getElementById("largeFileUpload").files[0];
        try {
            let options = {
                path: "/Documents",
                fileName: file.name,
                rangeSize: (5 * 1024 * 1024)
            };
            const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.create(client, file, options);
            const response = await uploadTask.upload();
            ui.updateOutput(response);
            return response;
        } catch (error) {
            throw error;
        }
    }
}