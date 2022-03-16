import {ConversationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationCollectionResponse();
}
