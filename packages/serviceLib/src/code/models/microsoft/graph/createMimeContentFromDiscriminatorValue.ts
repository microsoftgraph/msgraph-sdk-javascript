import {MimeContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMimeContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : MimeContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MimeContent();
}
