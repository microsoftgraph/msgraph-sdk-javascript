import {DeviceAndAppManagementAssignmentTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceAndAppManagementAssignmentTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceAndAppManagementAssignmentTarget();
}
