import {BookingServiceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingServiceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingServiceCollectionResponse();
}
