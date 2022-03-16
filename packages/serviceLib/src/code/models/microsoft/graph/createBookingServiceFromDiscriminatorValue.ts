import {BookingService} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingService {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingService();
}
