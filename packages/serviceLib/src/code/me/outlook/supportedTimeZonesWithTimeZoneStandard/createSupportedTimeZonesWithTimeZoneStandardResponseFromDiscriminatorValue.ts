import {SupportedTimeZonesWithTimeZoneStandardResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesWithTimeZoneStandardResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportedTimeZonesWithTimeZoneStandardResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportedTimeZonesWithTimeZoneStandardResponse();
}
