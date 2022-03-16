import {CreateReplyAllRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyAllRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyAllRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyAllRequestBody();
}
