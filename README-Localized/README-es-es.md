# Biblioteca cliente de JavaScript de Microsoft Graph

[![npm version badge](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) [![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?maxAge=86400)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript) [![Known Vulnerabilities](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript/badge.svg?maxAge=86400)](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript) [![Licence](https://img.shields.io/github/license/microsoftgraph/msgraph-sdk-javascript.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![Downloads](https://img.shields.io/npm/dm/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

La biblioteca cliente de JavaScript de Microsoft Graph es un envase reducido en torno a la API de Microsoft Graph que puede usarse en el lado del servidor y en el explorador.

**¿Busca IntelliSense en los modelos (usuarios, grupos, etc.)? Vea el repositorio de [tipos de Microsoft Graph](https://github.com/microsoftgraph/msgraph-typescript-typings).**

[![Demostración de TypeScript](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/main/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## Instalación

### Mediante npm

```cmd
npm install @microsoft/microsoft-graph-client
```

importe `@microsoft/microsoft-graph-client` en el módulo y también necesitará polyfills para capturar como [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch).

```typescript
import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
```

### Mediante etiqueta de script

Incluya [graph-js-sdk.js](https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js) en la página HTML.

```HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
```

En caso de que el explorador no sea compatible con [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) \[[support](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)] o [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \[[support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)], deberá usar polyfills como [github/fetch](https://github.com/github/fetch) para fetch y [es6-promise](https://github.com/stefanpenner/es6-promise) para promise.

```HTML
<!-- polyfilling promise -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>

<!-- polyfilling fetch -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

<!-- depending on your browser you might wanna include babel polyfill -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>
```

## Introducción

### 1. Registrar su aplicación

Registre su aplicación para usar la API de Microsoft Graph con uno de los siguientes portales de autenticación compatibles:

-   [Portal de registro de aplicaciones de Microsoft](https://apps.dev.microsoft.com): Registre una nueva aplicación que funcione con cuentas de Microsoft y/o cuentas de la organización con el punto de conexión de autenticación V2 unificado.
-   [Microsoft Azure Active Directory](https://manage.windowsazure.com): Registre una nueva aplicación en el espacio empresarial de Active Directory para dar soporte a los usuarios de cuentas profesionales o educativas de su espacio empresarial, o a varios espacios empresariales.

### 2. Autenticarse para el servicio de Microsoft Graph

La biblioteca cliente de JavaScript de Microsoft Graph tiene una implementación de adaptador ([ImplicitMSALAuthenticationProvider](src/ImplicitMSALAuthenticationProvider.ts)) para [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core) (biblioteca de autenticación de Microsoft) que se ocupa de recibir el `accessToken`. La biblioteca MSAL no se incluye con esta biblioteca, el usuario debe incluirla de forma externa (para incluir MSAL, consulte [esto](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core#installation)).

> **Nota importante:** MSAL solo es compatible con las aplicaciones front-end, para la autenticación en el servidor tiene que implementar su propio AuthenticationProvider. Obtenga información acerca de cómo puede crear un [proveedor de autenticación personalizado](./docs/CustomAuthenticationProvider.md).

#### Creación de una instancia de ImplicitMSALAuthenticationProvider en un entorno de explorador

Consulte devDependencies en [package.json](./package.json) para ver la versión compatible de msal y actualícela a continuación.

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

#### Creación de una instancia de ImplicitMSALAuthenticationProvider en un entorno de nodo

Consulte devDependencies en [package.json](./package.json) para ver la versión compatible de msal y actualícela a continuación.

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

El usuario puede integrar la biblioteca de autenticación preferida mediante la implementación de `IAuthenticationProvider` interfaz. Consulte la implementación de un [proveedor de autenticación personalizada](./docs/CustomAuthenticationProvider.md).

### 3. Inicializar un objeto de cliente de Microsoft Graph con un proveedor de autenticación

Una instancia de la clase **cliente** controla las solicitudes a la API de Microsoft Graph y procesa las respuestas. Para crear una nueva instancia de esta clase, tiene que proporcionar una instancia de [`IAuthenticationProvider`](src/IAuthenticationProvider.ts) que necesita pasarse como un valor para la clave `authProvider` en [`ClientOptions`](src/IClientOptions.ts) a un método de inicializador estático `Client.initWithMiddleware`.

#### Para entornos de navegador

```typescript
const options = {
	authProvider, // An instance created from previous step
};
const Client = MicrosoftGraph.Client;
const client = Client.initWithMiddleware(options);
```

#### Para entornos de nodo

```typescript
import { Client } from "@microsoft/microsoft-graph-client";

const options = {
	authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);
```

Para obtener más información sobre cómo inicializar el cliente, consulte [este documento](./docs/CreatingClientInstance.md).

### 4. Realizar solicitudes a Graph

Una vez que haya configurado la autenticación y una instancia del cliente, puede empezar a realizar llamadas al servicio. Todas las solicitudes deberían empezar con `client.api(path)` y terminar con una [acción](./docs/Actions.md).

Obtención de detalles de usuario

```typescript
try {
	let userDetails = await client.api("/me").get();
	console.log(userDetails);
} catch (error) {
	throw error;
}
```

Enviar un correo electrónico a los destinatarios

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

Para obtener más información, consulte: [Patrón de llamada](docs/CallingPattern.md), [acciones](docs/Actions.md), [parámetros de consulta](docs/QueryParameters.md), [métodos de la API](docs/OtherAPIs.md) y [más](docs/).

## Documentación

-   [Procesamiento por lotes](docs/content/Batching.md)
-   [Tarea de carga de archivos de gran tamaño](docs/tasks/LargeFileUploadTask.md)
-   [Iterador de páginas](docs/tasks/PageIterator.md)
-   [Acciones](docs/Actions.md)
-   [Parámetros de consulta](docs/QueryParameters.md)
-   [Otras API](docs/OtherAPIs.md)
-   [Obtener respuesta sin procesar](docs/GettingRawResponse.md)

## Preguntas y comentarios

Nos encantaría recibir sus comentarios sobre la biblioteca cliente de JavaScript de Microsoft Graph. Puede enviarnos sus preguntas y sugerencias a través de la sección [Problemas](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) de este repositorio.

## Colaboradores

Vea la [directrices de contribución](CONTRIBUTING.md).

## Recursos adicionales

-   [Sitio web de Microsoft Graph](https://graph.microsoft.io)
-   [Tipos de TypeScript de Microsoft Graph](https://github.com/microsoftgraph/msgraph-typescript-typings/)
-   [Crear aplicaciones de página única en Angular con Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-angularspa)
-   [Crear aplicaciones Node.js Express con Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp)
-   [Centro para desarrolladores de Office](http://dev.office.com/)

## Avisos de terceros

Consulte [avisos de terceros](./THIRD%20PARTY%20NOTICES) para obtener información sobre los paquetes que se incluyen en [package.json](./package.json)

## Informes de seguridad

Si encuentra un problema de seguridad con nuestras bibliotecas o servicios, informe a [secure@microsoft.com](mailto:secure@microsoft.com) con todos los detalles posibles. Es posible que el envío pueda optar a una recompensa a través del programa [Microsoft Bounty](http://aka.ms/bugbounty). No publique problemas de seguridad en problemas de GitHub ni ningún otro sitio público. Nos pondremos en contacto con usted rápidamente tras recibir la información. Le animamos a que obtenga notificaciones de los incidentes de seguridad que se produzcan; para ello, visite [esta página](https://technet.microsoft.com/en-us/security/dd252948) y suscríbase a las alertas de avisos de seguridad.

## Licencia

Copyright (c) Microsoft Corporation. Todos los derechos reservados. Publicado bajo la licencia MIT (la "[Licencia](./LICENSE)").

## Valoramos y nos adherimos al Código de conducta de código abierto de Microsoft

Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
