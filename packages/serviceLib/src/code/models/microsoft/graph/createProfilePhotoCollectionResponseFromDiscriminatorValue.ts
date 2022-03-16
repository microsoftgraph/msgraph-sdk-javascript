import {ProfilePhotoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProfilePhotoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProfilePhotoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProfilePhotoCollectionResponse();
}
