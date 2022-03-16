import {Printer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Printer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Printer();
}
