import {UnifiedRolePermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRolePermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRolePermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRolePermission();
}
