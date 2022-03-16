import {Shift} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftFromDiscriminatorValue(parseNode: ParseNode | undefined) : Shift {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Shift();
}
