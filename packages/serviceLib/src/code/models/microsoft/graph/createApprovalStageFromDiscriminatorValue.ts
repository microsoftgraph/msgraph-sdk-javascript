import {ApprovalStage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalStageFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApprovalStage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApprovalStage();
}
