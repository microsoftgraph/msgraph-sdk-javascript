import {Attachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Attachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Attachment();
}
