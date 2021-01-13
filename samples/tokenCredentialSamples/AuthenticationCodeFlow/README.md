# Sample of passing an AuthorizationCodeCredential to the Javascript Client Library

1. Register your application to enable authentication to Azure Active Directory using an authorization code that was obtained through the authorization code flow. For more details, please check the following links

    - [Register an application](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
    - [Authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow).

2. Rename [secrets.sample.ts](./src/secrets.sample.ts) to secrets.ts

3. Update your clientId, tenantId, port, scopes, redirectUri, authorityHost, clientSecret in the **secrets.ts** file.

## Run Sample

1. Navigate to project home [../../]

2. Run `npm install` to install the application.

3. Run `npm run build` to build the library files.

4. Navigate to authenticationCodeFlow samples directory [./samples/tokenCredentialSamples/authenticationCodeFlow]

5. Run `npm start` to build and start the application.
