import {ClaimsMappingPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClaimsMappingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClaimsMappingPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClaimsMappingPolicy();
}
