import {BookingStaffMemberBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingStaffMemberBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingStaffMemberBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingStaffMemberBase();
}
