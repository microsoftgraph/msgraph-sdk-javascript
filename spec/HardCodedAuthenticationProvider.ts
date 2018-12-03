import {AuthenticationProvider} from "../src/IAuthenticationProvider";
import {AccessToken} from "./secrets";

export class HardCodedAuthenticationProvider implements AuthenticationProvider {
    public async getAccessToken() {
        return Promise.resolve(AccessToken);
    }
}