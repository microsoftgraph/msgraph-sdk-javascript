import {NotebookCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotebookCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotebookCollectionResponse();
}
