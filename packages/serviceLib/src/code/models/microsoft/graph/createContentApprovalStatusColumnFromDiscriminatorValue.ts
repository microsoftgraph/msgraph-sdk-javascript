import {ContentApprovalStatusColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentApprovalStatusColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentApprovalStatusColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentApprovalStatusColumn();
}
