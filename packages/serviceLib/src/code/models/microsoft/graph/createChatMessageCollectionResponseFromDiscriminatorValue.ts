import {ChatMessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageCollectionResponse();
}
