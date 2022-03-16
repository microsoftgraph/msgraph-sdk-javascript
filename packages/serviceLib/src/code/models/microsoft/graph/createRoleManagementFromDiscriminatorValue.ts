import {RoleManagement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleManagementFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleManagement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleManagement();
}
