import {PolicyRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPolicyRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : PolicyRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PolicyRoot();
}
