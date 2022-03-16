import {CleanWindowsDeviceRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCleanWindowsDeviceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CleanWindowsDeviceRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CleanWindowsDeviceRequestBody();
}
