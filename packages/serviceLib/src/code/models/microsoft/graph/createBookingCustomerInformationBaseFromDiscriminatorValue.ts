import {BookingCustomerInformationBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerInformationBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerInformationBase();
}
