import {BookingQuestionAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingQuestionAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingQuestionAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingQuestionAssignment();
}
