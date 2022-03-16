import {BookingCustomQuestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomQuestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomQuestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomQuestion();
}
