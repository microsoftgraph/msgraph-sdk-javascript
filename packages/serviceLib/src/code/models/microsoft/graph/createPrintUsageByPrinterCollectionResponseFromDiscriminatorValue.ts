import {PrintUsageByPrinterCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByPrinterCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByPrinterCollectionResponse();
}
