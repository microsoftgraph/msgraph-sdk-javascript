import {PrinterCapabilities} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCapabilitiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterCapabilities {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterCapabilities();
}
