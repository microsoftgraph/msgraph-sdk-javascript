import {PrintMargin} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintMarginFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintMargin {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintMargin();
}
