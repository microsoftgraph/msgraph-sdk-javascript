import {ActivityBasedTimeoutPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityBasedTimeoutPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityBasedTimeoutPolicy();
}
