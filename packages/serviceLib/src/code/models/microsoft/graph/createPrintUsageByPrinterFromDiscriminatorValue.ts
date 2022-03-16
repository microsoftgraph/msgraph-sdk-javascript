import {PrintUsageByPrinter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByPrinter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByPrinter();
}
