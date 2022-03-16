import {ManagedAppPolicyDeploymentSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyDeploymentSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicyDeploymentSummary();
}
