import {InvitationParticipantInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitationParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitationParticipantInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitationParticipantInfo();
}
