import {PrinterLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterLocation();
}
