import {LogTeleconferenceDeviceQualityRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogTeleconferenceDeviceQualityRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogTeleconferenceDeviceQualityRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogTeleconferenceDeviceQualityRequestBody();
}
