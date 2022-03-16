import {Device} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Device {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Device();
}
