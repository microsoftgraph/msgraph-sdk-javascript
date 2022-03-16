import {DocumentSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSet();
}
