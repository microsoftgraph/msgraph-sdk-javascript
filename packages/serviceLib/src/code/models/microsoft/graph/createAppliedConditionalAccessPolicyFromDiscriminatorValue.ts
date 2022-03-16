import {AppliedConditionalAccessPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppliedConditionalAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppliedConditionalAccessPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppliedConditionalAccessPolicy();
}
