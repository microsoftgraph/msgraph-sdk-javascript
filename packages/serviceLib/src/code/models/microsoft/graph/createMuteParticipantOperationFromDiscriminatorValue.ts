import {MuteParticipantOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteParticipantOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteParticipantOperation();
}
