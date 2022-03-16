import {DateTimeTimeZone} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDateTimeTimeZoneFromDiscriminatorValue(parseNode: ParseNode | undefined) : DateTimeTimeZone {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DateTimeTimeZone();
}
