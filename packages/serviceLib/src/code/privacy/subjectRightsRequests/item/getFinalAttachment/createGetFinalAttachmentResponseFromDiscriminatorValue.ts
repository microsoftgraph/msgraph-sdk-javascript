import {GetFinalAttachmentResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetFinalAttachmentResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetFinalAttachmentResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetFinalAttachmentResponse();
}
