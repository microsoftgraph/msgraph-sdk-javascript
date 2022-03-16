import {PrintOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintOperation();
}
