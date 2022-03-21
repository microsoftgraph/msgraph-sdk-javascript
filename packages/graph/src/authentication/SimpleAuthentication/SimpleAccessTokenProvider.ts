/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module SimpleAccessTokenProvider
 */

import { AccessTokenProvider, AllowedHostsValidator, validateProtocol } from "@microsoft/kiota-abstractions";

import { GraphClientError } from "../../GraphClientError";

/**
 * @class
 * Simple Access Token Provider that returns an access token.
 * @extends AuthenticationProvider
 */
export class SimpleAccessTokenProvider implements AccessTokenProvider {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of SimpleAccessTokenProvider
	 * @param {()=>Promise<string>}getAccessTokenCallback  - The callback function to get the access token
	 * @param {string[]} scopes - The scopes for the access token
	 * @param {allowedHosts} allowedhosts -  A set of custom host names. Should contain hostnames only.
	 * @returns An instance of SimpleAccessTokenProvider
	 */
	public constructor(private getAccessTokenCallback: (scopes?: string[]) => Promise<string>, private scopes: string[], private allowedhosts?: Set<string>) {
		this.allowedHostsValidator = new AllowedHostsValidator(allowedhosts);
	}
	private readonly allowedHostsValidator: AllowedHostsValidator;
	public getAllowedHostsValidator = () => this.allowedHostsValidator;

	/**
	 * @public
	 * @async
	 * To get the access token
	 * @returns The promise that resolves to an access token
	 */
	public async getAuthorizationToken(url: string): Promise<string> {
		if (!url || !this.allowedHostsValidator.isUrlHostValid(url)) {
			throw new GraphClientError("The request url is not present in the allowed hosts list or is not a valid host");
		}
        validateProtocol(url);
		let token = "";
		if (this.getAccessTokenCallback) {
			token = await this.getAccessTokenCallback(this.scopes);
		}
		if (!token) {
			throw new GraphClientError("Please provide a valid access token");
		}

		console.log(token);
		return token;
	}
}
