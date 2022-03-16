import {PrintService} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintService {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintService();
}
