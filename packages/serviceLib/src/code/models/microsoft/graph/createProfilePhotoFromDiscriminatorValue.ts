import {ProfilePhoto} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProfilePhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProfilePhoto {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProfilePhoto();
}
