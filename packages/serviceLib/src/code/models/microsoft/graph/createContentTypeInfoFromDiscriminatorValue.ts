import {ContentTypeInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentTypeInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentTypeInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentTypeInfo();
}
