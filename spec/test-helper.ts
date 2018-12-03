import { Client } from "../lib/src/index";
import { HardCodedAuthenticationProvider } from "./HardCodedAuthenticationProvider";

export function getClient(): Client {
    return Client.init({
        authProvider: new HardCodedAuthenticationProvider()
    });
}

export function randomString() {
    return Math.random().toString(36).substring(7);
}
