import {ContentTypeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeCollectionResponse();
}
