import {ShiftAvailability} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShiftAvailabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShiftAvailability {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShiftAvailability();
}
