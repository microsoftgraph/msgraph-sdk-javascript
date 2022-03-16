import {SharingDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharingDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharingDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharingDetail();
}
