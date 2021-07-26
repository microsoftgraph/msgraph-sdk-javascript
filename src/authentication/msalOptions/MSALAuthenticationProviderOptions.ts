/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module MSALAuthenticationProviderOptions
 */

import { AccountInfo, InteractionType } from "@azure/msal-browser";

import { AuthenticationProviderOptions } from "../../IAuthenticationProviderOptions";

export interface AuthCodeMSALBrowserAuthenticationProviderOptions extends AuthenticationProviderOptions {
	scopes: string[];
	account: AccountInfo;
	interactionType: InteractionType;
}
