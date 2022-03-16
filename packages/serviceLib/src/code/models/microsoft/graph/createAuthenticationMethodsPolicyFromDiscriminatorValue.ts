import {AuthenticationMethodsPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsPolicy();
}
