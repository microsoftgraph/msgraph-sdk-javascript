import {NotebookLinks} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : NotebookLinks {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NotebookLinks();
}
