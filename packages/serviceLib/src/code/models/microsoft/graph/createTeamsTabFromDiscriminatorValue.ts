import {TeamsTab} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTab {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTab();
}
