import {PolicyBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PolicyBase();
}
