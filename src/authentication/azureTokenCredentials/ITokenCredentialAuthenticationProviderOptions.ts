/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { GetTokenOptions } from "@azure/identity";

import { AuthenticationProviderOptions } from "../../IAuthenticationProviderOptions";

/**
 * @interface
 * A signature represents the Authentication provider options for Token Credentials
 * @property {getTokenOptions} [GetTokenOptions] - Defines options for TokenCredential.getToken.
 */
export interface TokenCredentialAuthenticationProviderOptions extends AuthenticationProviderOptions {
	getTokenOptions?: GetTokenOptions;
}
