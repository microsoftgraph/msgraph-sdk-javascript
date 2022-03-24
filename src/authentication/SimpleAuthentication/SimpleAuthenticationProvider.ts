import { BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";

import { SimpleAccessTokenProvider } from "./SimpleAccessTokenProvider";

/**
 * @module SimpleAuthenticationProvider
 */
/**
 * A class which accepts callbacks to returns the access token.
 */
export class SimpleAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {
	/**
	 * @public
	 * @constructor
	 * Creates an instance of SimpleAuthenticationProvider
	 * @param {()=>Promise<string>}getAccessTokenCallback  - The callback function to get the access token
	 * @param {string[]} scopes - The scopes for the access token
	 * @param {allowedHosts} allowedhosts -  A set of custom host names. Should contain hostnames only.
	 * @returns An instance of SimpleAuthenticationProvider
	 */
	constructor(getAccessTokenCallback: (scopes?: string[]) => Promise<string>, scopes: string[] | undefined = ["https://graph.microsoft.com/.default"], allowedHosts?: Set<string>) {
		super(new SimpleAccessTokenProvider(getAccessTokenCallback, scopes, allowedHosts));
	}
}
