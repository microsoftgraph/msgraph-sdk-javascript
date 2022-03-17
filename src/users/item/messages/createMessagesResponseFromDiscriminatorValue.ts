import {MessagesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessagesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessagesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessagesResponse();
}
