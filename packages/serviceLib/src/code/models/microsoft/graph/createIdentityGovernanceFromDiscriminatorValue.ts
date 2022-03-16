import {IdentityGovernance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityGovernanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityGovernance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityGovernance();
}
