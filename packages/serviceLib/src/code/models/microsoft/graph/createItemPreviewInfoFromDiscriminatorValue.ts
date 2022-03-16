import {ItemPreviewInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemPreviewInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemPreviewInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemPreviewInfo();
}
