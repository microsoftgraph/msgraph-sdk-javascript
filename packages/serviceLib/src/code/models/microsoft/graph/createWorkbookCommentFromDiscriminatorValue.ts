import {WorkbookComment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookComment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookComment();
}
