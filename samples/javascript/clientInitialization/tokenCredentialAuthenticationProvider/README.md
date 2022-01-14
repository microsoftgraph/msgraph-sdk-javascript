# Sample of passing a ClientSecretCredential to the Javascript Client Library

1. Register your application to enable authentication to Azure Active Directory using the client secret credential. For more details, please check the following links

    - [Register an application](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)

    - [Documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-configure-app-access-web-apis#add-credentials-to-your-web-application).

2. Update your `clientId`, `tenantId`, `scopes`, `clientSecret`, `port` in the index.js .

## Run Sample

1. Navigate to project home [../../]

2. Run `npm install` to install the application.

3. Run `npm run build` to build the library files.

4. Navigate to the samples folder [./samples]and run `npm install`

5. Navigate to secrets.js[./secrets] and populate all the values (tenantId, clientId, clientSecret, scopes) 

6. Navigate to tokenCredentialAuthenticationProvider[./samples/javascript/clientInitialization/tokenCredentialAuthenticationProvider] in the samples directory.

7. For running this javascript sample, run `node index.js`
