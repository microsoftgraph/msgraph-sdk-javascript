import {ScopedRoleMembership} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScopedRoleMembership {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScopedRoleMembership();
}
