import {Approval} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApprovalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Approval {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Approval();
}
