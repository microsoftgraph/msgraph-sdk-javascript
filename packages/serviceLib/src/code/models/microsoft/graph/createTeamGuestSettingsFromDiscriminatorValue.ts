import {TeamGuestSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamGuestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamGuestSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamGuestSettings();
}
