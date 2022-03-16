import {ImageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageInfo();
}
