import {TeleconferenceDeviceQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceQuality();
}
