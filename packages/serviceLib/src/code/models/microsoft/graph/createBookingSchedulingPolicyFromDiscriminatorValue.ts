import {BookingSchedulingPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingSchedulingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingSchedulingPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingSchedulingPolicy();
}
