import {BookingBusinessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingBusinessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingBusinessCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingBusinessCollectionResponse();
}
