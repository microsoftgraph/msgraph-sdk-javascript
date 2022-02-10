import { BaseBearerTokenAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { AuthProviderCallback } from "./IAuthProviderCallback";
import { SimpleAccessTokenProvider } from "./SimpleAccessTokenProvider";


export class SimpleAuthenticationProvider extends BaseBearerTokenAuthenticationProvider {

    constructor(authProviderCallback: (scopes?: string[]) => Promise<string>) {
        super(new SimpleAccessTokenProvider(authProviderCallback));
    }
}