import {ConversationThreadCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationThreadCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationThreadCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationThreadCollectionResponse();
}
