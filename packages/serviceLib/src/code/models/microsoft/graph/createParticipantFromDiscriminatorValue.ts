import {Participant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantFromDiscriminatorValue(parseNode: ParseNode | undefined) : Participant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Participant();
}
