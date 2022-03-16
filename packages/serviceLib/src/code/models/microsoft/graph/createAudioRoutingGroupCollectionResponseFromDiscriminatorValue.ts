import {AudioRoutingGroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAudioRoutingGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AudioRoutingGroupCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AudioRoutingGroupCollectionResponse();
}
