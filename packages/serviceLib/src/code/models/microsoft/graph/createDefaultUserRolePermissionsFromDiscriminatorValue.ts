import {DefaultUserRolePermissions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultUserRolePermissionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultUserRolePermissions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultUserRolePermissions();
}
