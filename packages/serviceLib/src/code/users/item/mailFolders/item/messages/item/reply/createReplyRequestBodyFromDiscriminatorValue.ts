import {ReplyRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyRequestBody();
}
