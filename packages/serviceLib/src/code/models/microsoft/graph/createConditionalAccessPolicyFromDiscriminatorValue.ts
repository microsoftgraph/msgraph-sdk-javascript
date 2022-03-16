import {ConditionalAccessPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessPolicy();
}
