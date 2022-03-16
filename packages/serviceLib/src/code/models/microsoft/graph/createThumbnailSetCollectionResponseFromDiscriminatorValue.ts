import {ThumbnailSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailSetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailSetCollectionResponse();
}
