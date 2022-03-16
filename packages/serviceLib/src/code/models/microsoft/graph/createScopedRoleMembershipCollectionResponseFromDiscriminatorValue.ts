import {ScopedRoleMembershipCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScopedRoleMembershipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScopedRoleMembershipCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScopedRoleMembershipCollectionResponse();
}
