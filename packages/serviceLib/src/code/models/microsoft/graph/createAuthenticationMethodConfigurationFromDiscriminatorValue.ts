import {AuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodConfiguration();
}
