import {ShiftActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftActivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftActivity();
}
