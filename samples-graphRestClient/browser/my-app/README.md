---
page_type: sample
description: This sample demonstrates how to use the Microsoft Graph JavaScript SDK to access data in Office 365 from React browser apps.
products:
- ms-graph
- microsoft-graph-calendar-api
- office-exchange-online
languages:
- typescript
- nodejs
---

# Microsoft Graph sample React single-page app

This sample demonstrates how to use the Microsoft Graph JavaScript SDK to access data in Office 365 from React browser apps.

## Prerequisites

Before you start this tutorial, you should have [Node.js](https://nodejs.org) and [Yarn](https://classic.yarnpkg.com/) installed on your development machine. If you do not have Node.js or Yarn, visit the previous links for download options.

You should also have either a personal Microsoft account with a mailbox on Outlook.com, or a Microsoft work or school account. If you don't have a Microsoft account, there are a couple of options to get a free account:

- You can [sign up for a new personal Microsoft account](https://signup.live.com/signup?wa=wsignin1.0&rpsnv=12&ct=1454618383&rver=6.4.6456.0&wp=MBI_SSL_SHARED&wreply=https://mail.live.com/default.aspx&id=64855&cbcxt=mai&bk=1454618383&uiflavor=web&uaid=b213a65b4fdc484382b6622b3ecaa547&mkt=E-US&lc=1033&lic=1).
- You can [sign up for the Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) to get a free Microsoft 365 subscription.

## Register a web application with the Azure Active Directory admin center

1. Open a browser and navigate to the Azure Active Directory admin center. Login using a **personal account** (aka: Microsoft Account) or **Work or School Account**.

1. Select **Azure Active Directory** in the left-hand navigation, then select **App registrations** under **Manage**.

    > **Note:** Azure AD B2C users may only see **App registrations (legacy)**. In this case, please go directly to https://aka.ms/appregistrations.

1. Select **New registration**. On the **Register an application** page, set the values as follows.

    - Set **Name** to `React Graph Tutorial`.
    - Set **Supported account types** to **Accounts in any organizational directory and personal Microsoft accounts**.
    - Under **Redirect URI**, set the first drop-down to `Single-page application (SPA)` and set the value to `http://localhost:3000`.

1. Choose **Register**. On the **React Graph Tutorial** page, copy the value of the **Application (client) ID** and save it, you will need it in the next step.

## Configure the sample

1. Rename the `./graph-tutorial/src/Config.example.ts` file to `./graph-tutorial/src/Config.ts`.
1. Edit the `./graph-tutorial/src/Config.ts` file and make the following changes.
    1. Replace `YOUR_APP_ID_HERE` with the **Application Id** you got from the App Registration Portal.
1. In your command-line interface (CLI), navigate to the `graph-tutorial` directory and run the following command to install requirements.

    ```Shell
    yarn install
    ```

## Run the sample

1. Run the following command in your CLI to start the application.

    ```Shell
    yarn start
    ```

1. Open a browser and browse to `http://localhost:3000`.
## Code of conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
