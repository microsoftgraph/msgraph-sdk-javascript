import {TeleconferenceDeviceMediaQuality} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceMediaQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceMediaQuality {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceMediaQuality();
}
