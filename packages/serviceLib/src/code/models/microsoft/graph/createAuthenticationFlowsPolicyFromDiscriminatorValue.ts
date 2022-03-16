import {AuthenticationFlowsPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationFlowsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationFlowsPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationFlowsPolicy();
}
