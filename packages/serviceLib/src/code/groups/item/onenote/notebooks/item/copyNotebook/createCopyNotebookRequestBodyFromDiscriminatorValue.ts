import {CopyNotebookRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyNotebookRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyNotebookRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyNotebookRequestBody();
}
