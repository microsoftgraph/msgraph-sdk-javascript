import {PlaceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlaceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlaceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlaceCollectionResponse();
}
