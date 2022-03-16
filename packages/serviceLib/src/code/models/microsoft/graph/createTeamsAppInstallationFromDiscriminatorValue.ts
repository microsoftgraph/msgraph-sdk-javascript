import {TeamsAppInstallation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstallation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppInstallation();
}
