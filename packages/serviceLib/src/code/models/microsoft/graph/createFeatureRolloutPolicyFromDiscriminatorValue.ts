import {FeatureRolloutPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureRolloutPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureRolloutPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureRolloutPolicy();
}
