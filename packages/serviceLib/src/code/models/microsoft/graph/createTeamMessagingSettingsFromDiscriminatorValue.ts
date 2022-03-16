import {TeamMessagingSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMessagingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamMessagingSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamMessagingSettings();
}
