import {RolePermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RolePermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RolePermission();
}
