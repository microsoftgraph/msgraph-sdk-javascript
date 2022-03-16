import {Print} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintFromDiscriminatorValue(parseNode: ParseNode | undefined) : Print {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Print();
}
