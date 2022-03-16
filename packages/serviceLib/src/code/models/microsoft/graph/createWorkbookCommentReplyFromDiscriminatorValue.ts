import {WorkbookCommentReply} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookCommentReply {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookCommentReply();
}
