import {ParticipantInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantInfo();
}
