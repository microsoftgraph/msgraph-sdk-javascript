import { AccessTokenProvider, BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";

export class GraphAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {
	constructor(private accessTokenTokenProvider: AccessTokenProvider) {
		super(accessTokenTokenProvider);
	}
}
