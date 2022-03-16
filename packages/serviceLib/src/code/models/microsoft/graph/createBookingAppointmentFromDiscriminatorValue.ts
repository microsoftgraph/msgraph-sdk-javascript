import {BookingAppointment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingAppointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingAppointment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingAppointment();
}
