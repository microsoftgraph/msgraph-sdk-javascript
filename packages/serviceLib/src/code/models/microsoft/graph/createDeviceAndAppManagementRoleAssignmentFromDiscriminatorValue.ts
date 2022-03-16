import {DeviceAndAppManagementRoleAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementRoleAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementRoleAssignment();
}
