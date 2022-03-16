import {PrintDocument} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintDocumentFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintDocument {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintDocument();
}
