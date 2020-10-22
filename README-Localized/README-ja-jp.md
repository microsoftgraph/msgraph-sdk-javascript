# Microsoft Graph JavaScript クライアント ライブラリ

[![npm バージョン バッジ](https://img.shields.io/npm/v/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) [![Travis](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript.svg?maxAge=86400)](https://travis-ci.org/microsoftgraph/msgraph-sdk-javascript) [![既知の脆弱性](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript/badge.svg?maxAge=86400)](https://snyk.io/test/github/microsoftgraph/msgraph-sdk-javascript) [![ライセンス](https://img.shields.io/github/license/microsoftgraph/msgraph-sdk-javascript.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![コード スタイル: より見栄え良く](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/microsoftgraph/msgraph-sdk-javascript) [![ダウンロード](https://img.shields.io/npm/dm/@microsoft/microsoft-graph-client.svg?maxAge=86400)](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

Microsoft Graph JavaScript クライアント ライブラリは、Microsoft Graph API の軽量ラッパーであり、サーバー側およびブラウザー内で使用できます。

**モデル (ユーザー、グループなど) で IntelliSense を探していますか ?[Microsoft Graph Types](https://github.com/microsoftgraph/msgraph-typescript-typings) リポジトリをご覧ください !**

[![TypeScript でも](https://raw.githubusercontent.com/microsoftgraph/msgraph-sdk-javascript/master/types-demo.PNG)](https://github.com/microsoftgraph/msgraph-typescript-typings)

## インストール

### npm 経由

```cmd
npm install @microsoft/microsoft-graph-client
```

モジュールに `@microsoft/microsoft-graph-client` をインポートします。また、[isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) のようなフェッチのためのポリフィルが必要になります。

```typescript
import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
```

### スクリプト タグ経由

[graph-js-sdk.js](https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js) を HTML ページに含めます。

```HTML
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
```

ブラウザが [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) \[[サポート](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility)] または [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \[[サポート](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)] をサポートしていない場合、フェッチには [github/fetch](https://github.com/github/fetch)、Promise には [es6-promise](https://github.com/stefanpenner/es6-promise) のようなポリフィルを使用する必要があります。

```HTML
<!-- polyfilling promise -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js"></script>

<!-- polyfilling fetch -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/whatwg-fetch/dist/fetch.umd.min.js"></script>

<!-- depending on your browser you might wanna include babel polyfill -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@babel/polyfill@7.4.4/dist/polyfill.min.js"></script>
```

## はじめに

### 1.アプリケーションを登録する

サポートされている次の認証ポータルのいずれかを使用して、Microsoft Graph API を使用するアプリケーションを登録します。

-   [Microsoft アプリケーション登録ポータル](https://apps.dev.microsoft.com):統合 V2 認証エンドポイントを使用して、Microsoft アカウントや組織のアカウントで機能する新しいアプリケーションを登録します。
-   [Microsoft Azure Active Directory](https://manage.windowsazure.com)テナントまたは複数のテナントで職場または学校のユーザーをサポートするために、テナントの Active Directory に新しいアプリケーションを登録します。

### 2.Microsoft Graph サービスの認証

Microsoft Graph JavaScript クライアント ライブラリには、`accessToken` の取得を処理する [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core) (Microsoft Authentication Library) のアダプター実装 ([ImplicitMSALAuthenticationProvider](src/ImplicitMSALAuthenticationProvider.ts)) があります。MSAL ライブラリはこのライブラリに同梱されていません。ユーザーは外部でそれを含める必要があります (MSAL を含めるには、[こちら](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-core#installation)を参照してください)。

> **重要なメモ:**MSAL は、フロントエンド アプリケーションでのみサポートされます。サーバー側の認証では、独自に AuthenticationProvider を実装する必要があります。[カスタム認証プロバイダー](./docs/CustomAuthenticationProvider.md)を作成する方法について説明します。

#### ブラウザー環境で ImplicitMSALAuthenticationProvider のインスタンスを作成する

互換性のある MSAL バージョンについては、[package.json](./package.json) の devDependencies を参照し、以下でそのバージョンを更新してください。

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

#### ノード環境で ImplicitMSALAuthenticationProvider のインスタンスを作成する

互換性のある MSAL バージョンについては、[package.json](./package.json) の devDependencies を参照し、以下でそのバージョンを更新してください。

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

ユーザーは `IAuthenticationProvider` インターフェイスを実装することにより、自分好みの認証ライブラリを統合できます。[カスタム認証プロバイダー](./docs/CustomAuthenticationProvider.md)の実装を参照してください。

### 3.認証プロバイダーで Microsoft Graph クライアント オブジェクトを初期化する

**Client** クラスのインスタンスは、Microsoft Graph API への要求に対処し、応答を処理します。このクラスの新しいインスタンスを作成するには、[`ClientOptions`](src/IClientOptions.ts) の `authProvider` キーの値として静的初期化メソッド `Client.initWithMiddleware` に渡す必要がある [`IAuthenticationProvider`](src/IAuthenticationProvider.ts) のインスタンスを提供する必要があります。

#### ブラウザー環境の場合

```typescript
const options = {
	authProvider, // An instance created from previous step
};
const Client = MicrosoftGraph.Client;
const client = Client.initWithMiddleware(options);
```

#### ノード環境の場合

```typescript
import { Client } from "@microsoft/microsoft-graph-client";

const options = {
	authProvider, // An instance created from previous step
};
const client = Client.initWithMiddleware(options);
```

クライアントの初期化の詳細については、[こちらのドキュメント](./docs/CreatingClientInstance.md)を参照してください。

### 4.Graph への要求を実行する

認証のセットアップとクライアントのインスタンスを用意したら、サービスの呼び出しを開始できます。すべてのリクエストは `client.api(path)` で始まり、[action](./docs/Actions.md) で終わる必要があります。

ユーザーの詳細の取得

```typescript
try {
	let userDetails = await client.api("/me").get();
	console.log(userDetails);
} catch (error) {
	throw error;
}
```

受信者にメールを送信する

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

詳細については、以下を参照してください:[呼び出しパターン](docs/CallingPattern.md)、[アクション](docs/Actions.md)、[クエリ パラメーター](docs/QueryParameters.md)、[API メソッド](docs/OtherAPIs.md)および[その他](docs/)。

## ドキュメント

-   [バッチ処理](docs/content/Batching.md)
-   [大容量ファイルのアップロード タスク](docs/tasks/LargeFileUploadTask.md)
-   [ページの反復子](docs/tasks/PageIterator.md)
-   [アクション](docs/Actions.md)
-   [クエリ パラメーター](docs/QueryParameters.md)
-   [その他の API](docs/OtherAPIs.md)
-   [Raw 応答の取得](docs/GettingRawResponse.md)

## 質問とコメント

Microsoft Graph JavaScript クライアント ライブラリに関するフィードバックをお寄せください。質問や提案につきましては、このリポジトリの「[問題](https://github.com/microsoftgraph/msgraph-sdk-javascript/issues)」セクションで送信できます。

## 投稿

[投稿ガイドライン](CONTRIBUTING.md)を参照してください。

## その他のリソース

-   [Microsoft Graph Web サイト](https://graph.microsoft.io)
-   [Microsoft Graph TypeScript 型](https://github.com/microsoftgraph/msgraph-typescript-typings/)
-   [Microsoft Graph を使った Angular の単一ページ アプリの作成](https://github.com/microsoftgraph/msgraph-training-angularspa)
-   [Microsoft Graph を使った Node.js Express アプリの作成](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp)
-   [Office デベロッパー センター](http://dev.office.com/)

## サードパーティについての通知

[package.json](./package.json) に含まれるパッケージの詳細については、[サードパーティについての通知](./THIRD%20PARTY%20NOTICES)を参照してください

## セキュリティ レポート

ライブラリまたはサービスでセキュリティに関する問題を発見した場合は、できるだけ詳細に [secure@microsoft.com](mailto:secure@microsoft.com) に報告してください。提出物は、[Microsoft Bounty](http://aka.ms/bugbounty) プログラムを通じて報酬を受ける対象となる場合があります。セキュリティの問題を GitHub の問題や他のパブリック サイトに投稿しないでください。情報を受け取り次第、ご連絡させていただきます。セキュリティの問題が発生したときに通知を受け取ることをお勧めします。そのためには、[このページ](https://technet.microsoft.com/en-us/security/dd252948)にアクセスし、セキュリティ アドバイザリ通知を受信登録してください。

## ライセンス

Copyright (c) Microsoft Corporation。All rights reserved.MIT ライセンス ("[ライセンス](./LICENSE)") に基づいてライセンスされています。

## Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定) を尊重し、遵守します

このプロジェクトでは、[Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定)](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[Code of Conduct FAQ (倫理規定の FAQ)](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
