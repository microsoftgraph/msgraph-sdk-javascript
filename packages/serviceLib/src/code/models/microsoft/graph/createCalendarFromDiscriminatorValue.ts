import {Calendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Calendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Calendar();
}
