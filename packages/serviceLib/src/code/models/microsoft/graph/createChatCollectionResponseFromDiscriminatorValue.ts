import {ChatCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatCollectionResponse();
}
