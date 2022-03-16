import {InvitedUserMessageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitedUserMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvitedUserMessageInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvitedUserMessageInfo();
}
