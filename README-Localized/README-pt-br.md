# Biblioteca do cliente Microsoft Graph JavaScript

emblema da versão npm Travis Vulnerabilidades conhecidas Licença estilo do código: prettier [![Downloads](https://img.shields.io/npm/dm/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

A biblioteca do cliente Microsoft Graph JavaScript é um invólucro leve em torno da API do Microsoft Graph, que pode ser usada no lado do servidor e no navegador.

**Procurando o IntelliSense nos modelos (usuários, grupos, etc.)? Confira o](https://github.com/microsoftgraph/msgraph-typescript-typings) repositório [do Microsoft Graph Types!**

[![Demonstração TypeScript ](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/main/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## Instalação

### Via npm

```cmd
npm install @microsoft/microsoft-graph-client
```

importe `@microsoft/microsoft-graph-client` para o seu módulo e, além disso, você precisará de metapreenchimentos de busca, como [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch).

```typescript
import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
```

### Via marca de script

Inclua [graph-js-sdk.js](https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js) na página HTML.

```HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
```

Caso o seu navegador não tenha suporte para [Buscar](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) \[[suporte](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)] ou [Prometer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \[[suporte](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)], você precisará usar o polipreenchimento, como [github/fetch](https://github.com/github/fetch) para a busca e [es6-promise](https://github.com/stefanpenner/es6-promise) para a promessa.

```HTML
<!-- polyfilling promise -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>

<!-- polyfilling fetch -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

<!-- depending on your browser you might wanna include babel polyfill -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>
```

## Introdução

### 1. Registre seu aplicativo

Registre seu aplicativo para usar a API do Microsoft Graph usando um dos seguintes portais de autenticação com suporte:

-   Vá até o [](https://apps.dev.microsoft.com)Portal de Registro de Aplicativos da Microsoft: Registre um novo aplicativo que funcione com contas da Microsoft e/ou contas organizacionais usando o Ponto final de autenticação v2 unificado.
-   [Microsoft Azure Active Directory](https://manage.windowsazure.com): Registre um novo aplicativo no Active Directory do locatário para oferecer suporte aos usuários corporativos ou estudantes para seu locatários ou vários locatários.

### 2. Autentique o serviço do Microsoft Graph

A biblioteca do cliente Microsoft Graph JavaScript possui uma implementação de adaptador ([ImplicitMSALAuthenticationProvider](src/ImplicitMSALAuthenticationProvider.ts)) para [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core) (Biblioteca de autenticação da Microsoft) que obtém o `accessToken`. A Biblioteca MSAL não é fornecida com essa biblioteca, o usuário deve incluí-la externamente (Para incluir MSAL, consulte [isso](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core#installation)).

> **Observação importante:** O MSAL é suportado apenas por aplicativos frontend; para autenticação no servidor, você precisa implementar seu próprio AuthenticationProvider. Saiba como você pode criar um [Provedor de autenticação personalizado](./docs/CustomAuthenticationProvider.md).

#### Crie uma instância do ImplicitMSALAuthenticationProvider no ambiente do navegador

Consulte devDependencies no [package.json](./package.json) para a versão msal compatível e atualize essa versão no abaixo.

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

#### Crie uma instância do ImplicitMSALAuthenticationProvider no ambiente do navegador

Consulte devDependencies no [package.json](./package.json) para a versão msal compatível e atualize essa versão no abaixo.

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

O usuário pode integrar a própria biblioteca de autenticação preferencial implementando a interface do `IAuthenticationProvider`. Consulte implementar [Provedor de autenticação personalizada](./docs/CustomAuthenticationProvider.md).

### 3. Inicialize um objeto Microsoft Graph Client com um provedor de autenticação

Uma instância da classe **Client** lida com solicitações à API do Microsoft Graph e processa as respostas. Para criar uma nova instância dessa classe, você precisa fornecer uma instância de IAuthenticationProvider que deve ser passada como um valor para a chave authProvider em Clienteoptions para um método inicializador estático `Client.initWithMiddleware`.

#### Para o ambiente do navegador

```typescript
const options = {
	authProvider, // An instance created from previous step
};
const Client = MicrosoftGraph.Client;
const client = Client.initWithMiddleware(options);
```

#### Para o ambiente do nó

```typescript
import { Client } from "@microsoft/microsoft-graph-client";

const options = {
	authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);
```

Para saber mais sobre a inicialização do cliente, confira [este documento](./docs/CreatingClientInstance.md).

### 4. Fazer solicitações ao gráfico

Depois de configurar a autenticação e uma instância do Cliente, você poderá começar a fazer chamadas para o serviço. Todas as solicitações devem começar com `client.api(path)` e terminar com uma [ação](./docs/Actions.md).

Obter detalhes do usuário

```typescript
try {
	let userDetails = await client.api("/me").get();
	console.log(userDetails);
} catch (error) {
	throw error;
}
```

Enviar um e-mail aos destinatários

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

Para obter mais informações, consulte: [Padrão da chamada](docs/CallingPattern.md), [Ações](docs/Actions.md), [Parâmetros de consulta](docs/QueryParameters.md), [Métodos API](docs/OtherAPIs.md) e [mais](docs/).

## Documentação

-   [Envio em lote](docs/content/Batching.md)
-   [Tarefa de carregar arquivos grandes](docs/tasks/LargeFileUploadTask.md)
-   [Iterador de página](docs/tasks/PageIterator.md)
-   [Ações](docs/Actions.md)
-   [ Parâmetros de consulta](docs/QueryParameters.md)
-   [Outras APIs](docs/OtherAPIs.md)
-   [Obter uma resposta pura](docs/GettingRawResponse.md)

## Perguntas e comentários

Adoraríamos receber seus comentários sobre o projeto Biblioteca do cliente Microsoft Graph JavaScript. Você pode enviar perguntas e sugestões na seção [Problemas](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) deste repositório.

## Colaboração

Confira as [diretrizes de colaboração](CONTRIBUTING.md).

## Recursos adicionais

-   [](https://graph.microsoft.io)Website do Microsoft Graph
-   [Tipos de TypeScript do Microsoft Graph](https://github.com/microsoftgraph/msgraph-typescript-typings/)
-   [Criar aplicativos angulares de página simples com o Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-angularspa)
-   [Criar aplicativos Node.js Express com o Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp)
-   [Centro de Desenvolvimento do Office](http://dev.office.com/)

## Avisos de terceiros

Consulte [Notificações de terceiros](./THIRD%20PARTY%20NOTICES) para obter mais informações sobre os pacotes que estão incluídos no [package.json](./package.json)

## Relatórios de segurança

Se você encontrar um problema de segurança com nossas bibliotecas ou serviços, informe-o em [secure@microsoft.com](mailto:secure@microsoft.com) com o máximo de detalhes possível. O seu envio pode estar qualificado para uma recompensa por meio do programa [Microsoft Bounty](http://aka.ms/bugbounty). Não poste problemas de segurança nos Problemas do GitHub ou qualquer outro site público. Entraremos em contato com você em breve após receber as informações. Recomendamos que você obtenha notificações sobre a ocorrência de incidentes de segurança visitando [esta página](https://technet.microsoft.com/en-us/security/dd252948) e assinando os alertas do Security Advisory.

## Licença

Copyright (c) Microsoft Corporation. Todos os direitos reservados. Licenciado sob a Licença MIT (a "[Licença](./LICENSE)");

## Valorizamos e cumprimos o Código de Conduta de Código Aberto da Microsoft

Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira as [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou entre em contato pelo [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
