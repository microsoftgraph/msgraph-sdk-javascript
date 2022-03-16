import {SupportedTimeZonesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportedTimeZonesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportedTimeZonesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportedTimeZonesResponse();
}
