import {Image} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Image {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Image();
}
