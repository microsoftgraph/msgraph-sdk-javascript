import {OfferShiftRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfferShiftRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OfferShiftRequestCollectionResponse();
}
