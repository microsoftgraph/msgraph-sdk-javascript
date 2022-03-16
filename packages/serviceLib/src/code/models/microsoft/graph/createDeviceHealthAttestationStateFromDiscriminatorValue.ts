import {DeviceHealthAttestationState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceHealthAttestationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceHealthAttestationState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceHealthAttestationState();
}
