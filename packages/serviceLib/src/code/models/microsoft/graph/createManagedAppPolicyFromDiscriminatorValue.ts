import {ManagedAppPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicy();
}
