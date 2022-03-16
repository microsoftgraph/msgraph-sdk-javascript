import {UpdateWindowsDeviceAccountActionParameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountActionParameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountActionParameter();
}
