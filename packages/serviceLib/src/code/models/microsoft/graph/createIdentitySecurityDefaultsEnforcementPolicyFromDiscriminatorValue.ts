import {IdentitySecurityDefaultsEnforcementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySecurityDefaultsEnforcementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySecurityDefaultsEnforcementPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySecurityDefaultsEnforcementPolicy();
}
