import {Album} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlbumFromDiscriminatorValue(parseNode: ParseNode | undefined) : Album {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Album();
}
