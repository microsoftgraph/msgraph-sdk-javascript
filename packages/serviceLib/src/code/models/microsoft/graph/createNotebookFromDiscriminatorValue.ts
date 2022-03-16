import {Notebook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNotebookFromDiscriminatorValue(parseNode: ParseNode | undefined) : Notebook {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Notebook();
}
