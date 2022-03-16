import {InviteParticipantsOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteParticipantsOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteParticipantsOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteParticipantsOperation();
}
