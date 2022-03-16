import {BookingAppointmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingAppointmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingAppointmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingAppointmentCollectionResponse();
}
