import {HyperlinkOrPictureColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHyperlinkOrPictureColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : HyperlinkOrPictureColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HyperlinkOrPictureColumn();
}
