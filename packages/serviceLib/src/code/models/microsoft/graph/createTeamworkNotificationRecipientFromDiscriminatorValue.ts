import {TeamworkNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkNotificationRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkNotificationRecipient();
}
