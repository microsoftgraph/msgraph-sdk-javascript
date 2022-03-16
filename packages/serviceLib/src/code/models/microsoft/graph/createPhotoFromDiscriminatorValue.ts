import {Photo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) : Photo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Photo();
}
