# Sample of passing a ClientSecretCredential to the Javascript Client Library

1. Register your application to enable authentication to Azure Active Directory using the client secret credential. For more details, please check the following links

    - [Register an application](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)

    - [Documention](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-access-web-apis#add-credentials-to-your-web-application).

2. Rename [secrets.sample.ts](./typescript/secrets.sample.ts) to secrets.ts or rename [secrets.sample.js](./javascript/secrets.sample.js) to secrets.js

3. Update your clientId, tenantId, scopes, clientSecret in the **secrets.ts/secrets.js** file.

## Run Sample

1. Navigate to project home [../../]

2. Run `npm install` to install the application.

3. Run `npm run build` to build the library files.

4. Navigate to clientCredentialFlow samples directory [./samples/tokenCredentialSamples/clientCredentialFlow]

5. For running the typescript sample, run `npm start` to build and start the application.

6. For running the javascript sample, navigate to the javascript/ directory and run `node clientSecretCredential.js`
