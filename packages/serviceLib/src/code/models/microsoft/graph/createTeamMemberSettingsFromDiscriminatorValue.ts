import {TeamMemberSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMemberSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamMemberSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamMemberSettings();
}
