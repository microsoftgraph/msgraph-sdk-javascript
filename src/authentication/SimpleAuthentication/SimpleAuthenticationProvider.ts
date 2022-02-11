import { BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";

import { SimpleAccessTokenProvider } from "./SimpleAccessTokenProvider";

export class SimpleAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {
	constructor(getAccessTokenCallback: (scopes?: string[]) => Promise<string>, scopes: string[]) {
		super(new SimpleAccessTokenProvider(getAccessTokenCallback, scopes));
	}
}
