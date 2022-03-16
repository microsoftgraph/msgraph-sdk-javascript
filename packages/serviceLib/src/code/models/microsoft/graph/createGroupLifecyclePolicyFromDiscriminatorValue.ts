import {GroupLifecyclePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupLifecyclePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupLifecyclePolicy();
}
