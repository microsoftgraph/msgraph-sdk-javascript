import {PrinterShareCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterShareCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterShareCollectionResponse();
}
