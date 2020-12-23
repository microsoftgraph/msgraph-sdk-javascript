# Bibliothèque cliente JavaScript Microsoft Graph

[![badge version npm](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) [![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?maxAge=86400)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript) [![Vulnérabilités connues](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript/badge.svg?maxAge=86400)](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript) [![Licence](https://img.shields.io/github/license/microsoftgraph/msgraph-sdk-javascript.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![style de code : plus beau](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![Téléchargements](https://img.shields.io/npm/dm/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

La bibliothèque client JavaScript de Microsoft Graph est une enveloppe légère autour de l'API Microsoft Graph qui peut être utilisée côté serveur et dans le navigateur.

**Vous recherchez IntelliSense sur les modèles (utilisateurs, groupes, etc.) ? Consultez les [types Microsoft Graph](https://github.com/microsoftgraph/msgraph-typescript-typings) référentiel !**

[![TypeScript demo](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/master/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## Installation

### Via NPM

```cmd
npm install @microsoft/microsoft-graph-client
```

Importez `@microsoft/Microsoft-Graph-client` dans votre module. vous avez également besoin de polyremplissages pour la récupération tels que [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch).

```typescript
import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
```

### Via la balise de script

Incluez [graph-js-sdk.js](https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js) dans votre page HTML.

```HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
```

Si votre navigateur ne prend pas en charge les fonctions [Récupérer](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) \[[support](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)] ou [Promesse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \[[support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)], vous devez utiliser des polyremplissages tels que [github/fetch](https://github.com/github/fetch) pour la récupération et [ES6 promise](https://github.com/stefanpenner/es6-promise) pour les promesses.

```HTML
<!-- polyfilling promise -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>

<!-- polyfilling fetch -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

<!-- depending on your browser you might wanna include babel polyfill -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>
```

## Prise en main

### 1. Inscription de votre application

Enregistrez votre application à l’aide de l’un des portails d’authentification pris en charge suivants pour utiliser l'API Microsoft Graph :

-   [portail d’inscription des applications de Microsoft](https://apps.dev.microsoft.com) : Enregistrez une nouvelle application qui fonctionne avec des comptes Microsoft et/ou des comptes d’organisation à l’aide du point de terminaison d’authentification V2 unifié.
-   [Microsoft Azure Active Directory](https://manage.windowsazure.com) : Enregistrez une nouvelle application dans l’annuaire Active Directory de votre locataire pour prendre en charge les utilisateurs professionnels ou scolaires de votre locataire ou de plusieurs clients.

### 2. S'authentifier au service de Microsoft Graph

La bibliothèque client JavaScript Microsoft Graph inclut une implémentation de carte ([ImplicitMSALAuthenticationProvider](src/ImplicitMSALAuthenticationProvider.ts)) pour [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core) (bibliothèque d’authentification Microsoft) qui prend en charge l’acquisition de `accessToken`. La bibliothèque MSAL n’est pas livrée avec cette bibliothèque, l’utilisateur doit l’inclure en externe (pour inclure MSAL, consultez [cet](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core#installation)).

> **Remarque importante :** MSAL est pris en charge uniquement pour les applications frontend, pour l’authentification côté serveur, vous devez implémenter votre propre AuthenticationProvider. Découvrez comment créer un [fournisseur d’authentification personnalisée](./docs/CustomAuthenticationProvider.md).

#### Création d’une instance de ImplicitMSALAuthenticationProvider dans l’environnement de navigateur

Reportez-vous à devDependencies dans [package.json](./package.json) pour la version MSAL compatible et mettez à jour cette version dans la version suivante.

```html
<script src="https://secure.aadcdn.microsoftonline-p.com/lib/<version>/js/msal.min.js"></script>
```

```typescript
// Configuration options for MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL.js-1.0.0-api-release#configuration-options
const msalConfig = {
	auth: {
		clientId: "your_client_id", // Client Id of the registered application
		redirectUri: "your_redirect_uri",
	},
};
const graphScopes = ["user.read", "mail.send"]; // An array of graph scopes

// Important Note: This library implements loginPopup and acquireTokenPopup flow, remember this while initializing the msal
// Initialize the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js#1-instantiate-the-useragentapplication
const msalApplication = new Msal.UserAgentApplication(msalConfig);
const options = new MicrosoftGraph.MSALAuthenticationProviderOptions(graphScopes);
const authProvider = new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalApplication, options);
```

#### Création d’une instance de ImplicitMSALAuthenticationProvider dans l’environnement de nœud

Reportez-vous à devDependencies dans [package.json](./package.json) pour la version MSAL compatible et mettez à jour cette version dans la version suivante.

```cmd
npm install msal@<version>
```

```typescript
import { UserAgentApplication } from "msal";

import { ImplicitMSALAuthenticationProvider } from "./node_modules/@microsoft/microsoft-graph-client/lib/src/ImplicitMSALAuthenticationProvider";

// An Optional options for initializing the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#configuration-options
const msalConfig = {
	auth: {
		clientId: "your_client_id", // Client Id of the registered application
		redirectUri: "your_redirect_uri",
	},
};
const graphScopes = ["user.read", "mail.send"]; // An array of graph scopes

// Important Note: This library implements loginPopup and acquireTokenPopup flow, remember this while initializing the msal
// Initialize the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js#1-instantiate-the-useragentapplication
const msalApplication = new UserAgentApplication(msalConfig);
const options = new MicrosoftGraph.MSALAuthenticationProviderOptions(graphScopes);
const authProvider = new ImplicitMSALAuthenticationProvider(msalApplication, options);
```

Un utilisateur peut intégrer sa propre bibliothèque d’authentification par défaut en implémentant l’interface `IAuthenticationProvider`. Référez-vous à l’implémentation du [Fournisseur d’authentification personnalisé](./docs/CustomAuthenticationProvider.md).

### 3. Initialiser un objet client Microsoft Graph avec un fournisseur d’authentification

Une instance de la classe **Client** gère les demandes en les envoyant vers l’API Microsoft Graph et en traitant les réponses. Pour créer une instance de cette classe, vous devez fournir une instance de [`IAuthenticationProvider`](src/IAuthenticationProvider.ts) lequel doit être transmis sous la forme d’une valeur pour la clé `authProvider dans` [`ClientOptions`](src/IClientOptions.ts) à une méthode d'initialisation statique `Client.initWithMiddleware`.

#### Pour l’environnement de navigateur

```typescript
const options = {
	authProvider, // An instance created from previous step
};
const Client = MicrosoftGraph.Client;
const client = Client.initWithMiddleware(options);
```

#### Pour l'environnement du nœud

```typescript
import { Client } from "@microsoft/microsoft-graph-client";

const options = {
	authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);
```

Pour plus d'informations sur l'initialisation du client, consultez [ce document](./docs/CreatingClientInstance.md).

### 4. Formuler des demandes auprès du Graph

Une fois que vous disposez d’une configuration d’authentification et d’une instance de client, vous pouvez commencer à effectuer des appels vers le service. Toutes les demandes doivent commencer avec `client.api(path)` et se terminent par une [action](./docs/Actions.md).

Obtenir les détails de l’utilisateur

```typescript
try {
	let userDetails = await client.api("/me").get();
	console.log(userDetails);
} catch (error) {
	throw error;
}
```

Envoyez un courrier électronique aux destinataires

```typescript
// Construct email object
const mail = {
	subject: "Microsoft Graph JavaScript Sample",
	toRecipients: [
		{
			emailAddress: {
				address: "example@example.com",
			},
		},
	],
	body: {
		content: "<h1>MicrosoftGraph JavaScript Sample</h1>Check out https://github.com/microsoftgraph/msgraph-sdk-javascript",
		contentType: "html",
	},
};
try {
	let response = await client.api("/me/sendMail").post({ message: mail });
	console.log(response);
} catch (error) {
	throw error;
}
```

Pour plus d’informations, consultez : [Modèle d’appels](docs/CallingPattern.md), [Actions](docs/Actions.md), [Paramètres de requête](docs/QueryParameters.md)[Méthodes API](docs/OtherAPIs.md) et [plus](docs/).

## Documentation

-   [Traitement par lots](docs/content/Batching.md)
-   [Tâche de chargement d’un fichier volumineux](docs/tasks/LargeFileUploadTask.md)
-   [Itérateur de page](docs/tasks/PageIterator.md)
-   [Actions](docs/Actions.md)
-   [ Paramètres de requête](docs/QueryParameters.md)
-   [Autres API](docs/OtherAPIs.md)
-   [Accès aux réponses brutes](docs/GettingRawResponse.md)

## Questions et commentaires

Nous serions ravis de connaître votre opinion sur la bibliothèque client JavaScript de Microsoft Graph. Vous pouvez nous faire part de vos questions et suggestions dans la rubrique [Problèmes](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) de ce référentiel.

## Contribution

Reportez-vous aux [instructions sur la contribution](CONTRIBUTING.md).

## Ressources supplémentaires

-   [Site web Microsoft Graph](https://graph.microsoft.io)
-   [Types TypeScript Microsoft Graph](https://github.com/microsoftgraph/msgraph-typescript-typings/)
-   [Créez des applications page simple Angular avec Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-angularspa)
-   [Créez des applications Node.js Express avec Microsoft Graph ](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp)
-   [Centre des développeurs Office](http://dev.office.com/)

## Notifications tierces

Consultez les [Notifications tierces](./THIRD%20PARTY%20NOTICES) pour des informations sur les paquets qui sont inclus dans le [package.json](./package.json)

## Génération de rapports de sécurité

Si vous rencontrez un problème de sécurité avec nos bibliothèques ou services, signalez-le à l’adresse [secure@microsoft.com](mailto:secure@microsoft.com) avec autant de détails que possible. Votre envoi vous donnera sans doute droit à une prime via le programme [Bounty de Microsoft](http://aka.ms/bugbounty). Merci de ne pas publier de problèmes de sécurité sur le site des problèmes GitHub ou sur un autre site public. Nous vous contacterons rapidement dès réception des informations. Nous vous encourageons à activer les notifications d’incidents de sécurité en vous rendant sur [cette page](https://technet.microsoft.com/en-us/security/dd252948) et en vous abonnant aux alertes d’avis de sécurité.

## Licence

Copyright (c) Microsoft Corporation. Tous droits réservés. Soumis à la licence MIT (la [« Licence](./LICENSE) ») ;

## Nous respectons le code de conduite Open Source de Microsoft.

Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
