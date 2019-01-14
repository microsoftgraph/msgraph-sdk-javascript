# Node Sample Using Javascript Client Library 

## Update Access Token

You can get an access token by doing the following:

1. Rename [secrets.sample.json](./secrets.example.json) to secrets.json 
2. Go to Graph Explorer.
3. Login with the account you want to use to run the node samples.
4. Open the F12 dev tools.
5. Type tokenPlease() into the console to get an access token.
6. Copy the access token and put it into the secrets.json file and save the file.

## Run Sample

1. Run `npm install` to install the application.
2. Run samples in one of two ways
    1. Run and debug the node samples found under ./samples/node/main.js by running the Run node samples configuration from the Debug menu in Visual Studio Code.
    2. Run the node samples from the CLI by entering node ./samples/node/main.js (assuming you are at the root of this repository).
