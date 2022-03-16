import {ConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationMemberCollectionResponse();
}
