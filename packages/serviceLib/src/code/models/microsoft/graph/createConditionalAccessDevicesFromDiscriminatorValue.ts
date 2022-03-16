import {ConditionalAccessDevices} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessDevicesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessDevices {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessDevices();
}
