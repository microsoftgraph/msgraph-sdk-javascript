import {CopyToNotebookRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToNotebookRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToNotebookRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToNotebookRequestBody();
}
