import {ApprovalStageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalStageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalStageCollectionResponse();
}
