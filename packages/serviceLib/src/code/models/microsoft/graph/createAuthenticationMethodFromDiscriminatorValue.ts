import {AuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethod();
}
