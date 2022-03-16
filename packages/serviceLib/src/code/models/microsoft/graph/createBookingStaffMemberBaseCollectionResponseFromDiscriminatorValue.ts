import {BookingStaffMemberBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberBaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingStaffMemberBaseCollectionResponse();
}
