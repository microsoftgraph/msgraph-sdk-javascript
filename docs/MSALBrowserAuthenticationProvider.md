#### Creating an instance of MSALBrowserAuthenticationProvider for a browser application

**Note**: The `MSALBrowserAuthenticationProvider` is introduced in version 3.0.0 of Microsoft Graph Client Library

###### Links for more information -

-   [npm - @azure/msal-browser](https://www.npmjs.com/package/@azure/msal-browser)
-   [github - @azure/msal-browser](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/README.md)

Steps to use `MSALBrowserAuthenticationProvider`;

1.  Using npm: `npm install @azure/msal-browser`

    Using html:

    ```html
    <!--Using script tag to include the bundled file or the CDN source-->
    <script type="text/javascript" src="https://alcdn.msauth.net/browser/2.15.0/js/msal-browser.min.js"></script>
    <script src="graph-js-sdk.js"></script>
    <script src="graph-client-msalBrowserAuthProvider.js"></script>
    ```

2.  Initialize the `msal-browser` `PublicClientApplication` instance: Learn more [how to initialize msal](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md)

3.  Following sample shows how to initialize a Microsoft Graph SDK `Client` instance,

Using npm:

```typescript
    import { PublicClientApplication, InteractionType, AccountInfo } from "@azure/msal-browser";

    import { MSALBrowserAuthenticationProvider, MSALBrowserAuthenticationProviderOptions } from "@microsoft/microsoft-graph-client/authProviders/msal-browser";

    const options:MSALBrowserAuthenticationProviderOptions: {
        account: account, // the AccountInfo instance to acquire the token for.
        interactionType: InteractionType.PopUp , // msal-browser InteractionType
        scopes: ["user.read", "mail.send"] // example of the scopes to be passed
    }

    // Pass the PublicClientApplication instance from step 2 to create MSALBrowserAuthenticationProvider instance
    const authProvider: new MSALBrowserAuthenticationProvider(publicClientApplication, options),


    // Initialize the Graph client
    const graphClient = Client.initWithMiddleware({
        authprovider
    });

```

Using CDN or script:

```javascript
const msalClient = new msal.PublicClientApplication(msalConfig);

const authProvider = new MicrosoftGraphMSALBrowserAuthProvider.MSALBrowserAuthenticationProvider(msalClient, {
	account, // the AccountInfo instance to acquire the token for
	scopes: ["user.read", "mail.send"],
	interactionType: msal.InteractionType.Popup,
});

// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });
```
