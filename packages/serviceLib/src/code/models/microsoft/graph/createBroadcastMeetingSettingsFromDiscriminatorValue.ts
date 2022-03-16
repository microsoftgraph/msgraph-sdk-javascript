import {BroadcastMeetingSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBroadcastMeetingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : BroadcastMeetingSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BroadcastMeetingSettings();
}
