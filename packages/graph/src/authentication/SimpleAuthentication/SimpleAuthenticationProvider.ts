import { BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { AuthProviderCallback } from "./IAuthProviderCallback";
import { SimpleAccessTokenProvider } from "./SimpleAccessTokenProvider";


export class SimpleAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {

    constructor(authProviderCallback: AuthProviderCallback) {
        super(new SimpleAccessTokenProvider(authProviderCallback));
    }
}