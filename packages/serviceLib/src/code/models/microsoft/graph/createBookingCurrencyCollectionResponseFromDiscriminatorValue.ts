import {BookingCurrencyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCurrencyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCurrencyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCurrencyCollectionResponse();
}
