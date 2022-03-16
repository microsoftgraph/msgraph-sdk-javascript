import {OfferShiftRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfferShiftRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OfferShiftRequest();
}
