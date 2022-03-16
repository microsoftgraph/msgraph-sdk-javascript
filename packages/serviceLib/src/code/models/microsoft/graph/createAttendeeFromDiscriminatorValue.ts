import {Attendee} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Attendee {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Attendee();
}
