import {TeamworkConversationIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkConversationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkConversationIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkConversationIdentity();
}
