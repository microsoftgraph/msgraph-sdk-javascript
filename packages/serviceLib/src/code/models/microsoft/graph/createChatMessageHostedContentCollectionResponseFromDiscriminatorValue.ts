import {ChatMessageHostedContentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageHostedContentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageHostedContentCollectionResponse();
}
