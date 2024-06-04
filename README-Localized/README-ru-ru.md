# Клиентская библиотека JavaScript для Microsoft Graph

[![Эмблема версии npm](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) [![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?maxAge=86400)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript) [![Известные уязвимости](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript/badge.svg?maxAge=86400)](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript) [![Лицензия](https://img.shields.io/github/license/microsoftgraph/msgraph-sdk-javascript.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![Стиль кода: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![Загрузки](https://img.shields.io/npm/dm/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

Клиентская библиотека JavaScript для Microsoft Graph — это компактная оболочка API Microsoft Graph, которую можно использовать на стороне сервера и в браузере.

**Требуется IntelliSense для моделей (пользователи, группы и т. п.)? Ознакомьтесь с репозиторием [Microsoft Graph Types](https://github.com/microsoftgraph/msgraph-typescript-typings).**

[![Демонстрация TypeScript](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/main/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## Установка

### С помощью npm

```cmd
npm install @microsoft/microsoft-graph-client
```

Импортируйте `@microsoft/microsoft-graph-client` в модуль. Также потребуются полизаполнения для получения данных, например [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch).

```typescript
import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
```

### С помощью тега Script

Включите [graph-js-sdk.js](https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js) в страницу HTML.

```HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
```

Если ваш браузер не поддерживает [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) \[[поддержка](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)] или [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \[[поддержка](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)], потребуется использовать полизаполнения, например [github/fetch](https://github.com/github/fetch) для fetch и [es6-promise](https://github.com/stefanpenner/es6-promise) для promise.

```HTML
<!-- polyfilling promise -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>

<!-- polyfilling fetch -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

<!-- depending on your browser you might wanna include babel polyfill -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>
```

## Начало работы

### 1. Зарегистрируйте приложение

Зарегистрируйте приложение для использования API Microsoft Graph с помощью одного из следующих поддерживаемых порталов проверки подлинности.

-   [Портал регистрации приложений Майкрософт](https://apps.dev.microsoft.com). Зарегистрируйте новое приложение, работающее с учетными записями Майкрософт и/или с учетными записями организации, используя объединенную конечную точку проверки подлинности версии 2.
-   [Microsoft Azure Active Directory](https://manage.windowsazure.com). Зарегистрируйте новое приложение в службе каталогов Active Directory клиента для поддержки пользователей рабочих или учебных учетных записей для одного или нескольких клиентов.

### 2. Выполните проверку подлинности для службы Microsoft Graph

В клиентской библиотеке JavaScript для Microsoft Graph есть реализация адаптера ([ImplicitMSALAuthenticationProvider](src/ImplicitMSALAuthenticationProvider.ts)) для [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core) (библиотека проверки подлинности Майкрософт), который получает `accessToken`. Библиотека MSAL не поставляется вместе с этой библиотекой, пользователю потребуется включить ее извне (сведения о включении MSAL см. [здесь](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core#installation)).

> **Важное примечание.** MSAL поддерживается только для интерфейсных приложений. Для проверки подлинности на стороне сервера вам потребуется реализовать собственный поставщик AuthenticationProvider. Узнайте, как создать [настраиваемый поставщик проверки подлинности](./docs/CustomAuthenticationProvider.md).

#### Создание экземпляра ImplicitMSALAuthenticationProvider в среде браузера

См. devDependencies в [package.json](./package.json) для получения сведений о совместимой версии MSAL. Обновите эту версию ниже.

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

#### Создание экземпляра ImplicitMSALAuthenticationProvider в среде узла

См. devDependencies в [package.json](./package.json) для получения сведений о совместимой версии MSAL. Обновите эту версию ниже.

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

Пользовать может реализовать предпочитаемую библиотеку проверки подлинности путем реализации интерфейса `IAuthenticationProvider`. См. сведения о реализации [настраиваемого поставщика проверки подлинности](./docs/CustomAuthenticationProvider.md).

### 3. Инициализируйте клиентский объект Microsoft Graph с поставщиком проверки подлинности

Экземпляр класса **Client** обрабатывает запросы к API Microsoft Graph и обработку ответов. Чтобы создать новый экземпляр этого класса, нужно предоставить экземпляр [`IAuthenticationProvider`](src/IAuthenticationProvider.ts), который необходимо передать в качестве значения для ключа `authProvider` в разделе [`ClientOptions`](src/IClientOptions.ts) статическому методу инициализатора `Client.initWithMiddleware`.

#### Для среды браузера

```typescript
const options = {
	authProvider, // An instance created from previous step
};
const Client = MicrosoftGraph.Client;
const client = Client.initWithMiddleware(options);
```

#### Для среды узла

```typescript
import { Client } from "@microsoft/microsoft-graph-client";

const options = {
	authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);
```

Сведения об инициализации клиента см. в [этом документе](./docs/CreatingClientInstance.md).

### 4. Создайте запросы к Microsoft Graph

После настройки проверки подлинности и экземпляра клиента можно начать вызывать службу. Все запросы должны начинаться с `client.api(путь)` и оканчиваться [действием](./docs/Actions.md).

Получение сведений о пользователе

```typescript
try {
	let userDetails = await client.api("/me").get();
	console.log(userDetails);
} catch (error) {
	throw error;
}
```

Отправка сообщения электронной почты получателям

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

Дополнительные сведения: [шаблон вызова](docs/CallingPattern.md), [действия](docs/Actions.md), [параметры запросов](docs/QueryParameters.md), [методы API](docs/OtherAPIs.md) и [прочее](docs/).

## Документация

-   [Пакетная обработка](docs/content/Batching.md)
-   [Задача отправки больших файлов](docs/tasks/LargeFileUploadTask.md)
-   [Итератор страниц](docs/tasks/PageIterator.md)
-   [Действия](docs/Actions.md)
-   [Параметры запросов](docs/QueryParameters.md)
-   [Прочие API](docs/OtherAPIs.md)
-   [Получение необработанного ответа](docs/GettingRawResponse.md)

## Вопросы и комментарии

Мы будем рады узнать ваше мнение о клиентской библиотеке JavaScript для Microsoft Graph. Вы можете отправить нам вопросы и предложения в разделе [Проблемы](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues) этого репозитория.

## Помощь

См. [добавление рекомендаций](CONTRIBUTING.md).

## Дополнительные ресурсы

-   [Веб-сайт Microsoft Graph](https://graph.microsoft.io)
-   [Типы TypeScript в Microsoft Graph](https://github.com/microsoftgraph/msgraph-typescript-typings/)
-   [Создание одностраничных приложений Angular с помощью Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-angularspa)
-   [Создание приложений Node.js Express с помощью Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp)
-   [Центр разработчиков Office](http://dev.office.com/)

## Уведомления третьих лиц

См. раздел [Уведомления третьих лиц](./THIRD%20PARTY%20NOTICES) для получения сведений о пакетах, входящих в состав [package.json](./package.json)

## Отчеты о безопасности

Если вы столкнулись с проблемами безопасности наших библиотек или служб, сообщите о проблеме по адресу [secure@microsoft.com](mailto:secure@microsoft.com), добавив как можно больше деталей. Возможно, вы получите вознаграждение, в рамках программы [Microsoft Bounty](http://aka.ms/bugbounty). Не публикуйте ошибки безопасности в ошибках GitHub или на любом общедоступном сайте. Вскоре после получения информации, мы свяжемся с вами. Рекомендуем вам настроить уведомления о нарушениях безопасности. Это можно сделать, подписавшись на уведомления безопасности консультационных служб на [этой странице](https://technet.microsoft.com/en-us/security/dd252948).

## Лицензия

© Корпорация Майкрософт. Все права защищены. Предоставляется по лицензии MIT (далее — "[Лицензия](./LICENSE)");

## Мы соблюдаем правила поведения при использовании открытого кода Майкрософт.

Этот проект соответствует [Правилам поведения разработчиков открытого кода Майкрософт](https://opensource.microsoft.com/codeofconduct/). Дополнительные сведения см. в разделе [часто задаваемых вопросов о правилах поведения](https://opensource.microsoft.com/codeofconduct/faq/). Если у вас возникли вопросы или замечания, напишите нам по адресу [opencode@microsoft.com](mailto:opencode@microsoft.com).
