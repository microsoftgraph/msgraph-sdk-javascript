import {PostCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PostCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PostCollectionResponse();
}
