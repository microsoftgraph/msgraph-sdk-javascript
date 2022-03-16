import {UnmuteParticipantOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmuteParticipantOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmuteParticipantOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmuteParticipantOperation();
}
