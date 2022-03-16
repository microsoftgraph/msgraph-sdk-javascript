import {AuthorizationPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthorizationPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthorizationPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthorizationPolicy();
}
