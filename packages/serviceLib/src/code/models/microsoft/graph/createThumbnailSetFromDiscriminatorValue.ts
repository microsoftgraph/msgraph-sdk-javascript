import {ThumbnailSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThumbnailSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThumbnailSet();
}
