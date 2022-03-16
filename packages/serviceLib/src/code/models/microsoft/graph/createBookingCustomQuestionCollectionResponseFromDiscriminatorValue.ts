import {BookingCustomQuestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomQuestionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomQuestionCollectionResponse();
}
