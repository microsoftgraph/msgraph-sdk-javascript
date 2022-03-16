import {ApprovalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalCollectionResponse();
}
