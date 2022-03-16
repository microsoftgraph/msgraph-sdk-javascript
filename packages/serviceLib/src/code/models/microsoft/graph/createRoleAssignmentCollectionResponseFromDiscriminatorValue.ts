import {RoleAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleAssignmentCollectionResponse();
}
