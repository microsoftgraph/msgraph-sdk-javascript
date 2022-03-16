import {AudioConferencing} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioConferencingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AudioConferencing {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AudioConferencing();
}
