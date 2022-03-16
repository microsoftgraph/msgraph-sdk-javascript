import {TeamworkBot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkBotFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkBot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkBot();
}
