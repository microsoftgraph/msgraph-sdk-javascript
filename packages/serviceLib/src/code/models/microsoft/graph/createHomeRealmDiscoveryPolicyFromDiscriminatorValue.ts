import {HomeRealmDiscoveryPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHomeRealmDiscoveryPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : HomeRealmDiscoveryPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HomeRealmDiscoveryPolicy();
}
