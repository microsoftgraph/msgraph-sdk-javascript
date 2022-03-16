import {GetNotebookFromWebUrlRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNotebookFromWebUrlRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNotebookFromWebUrlRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNotebookFromWebUrlRequestBody();
}
