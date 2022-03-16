import {TokenIssuancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenIssuancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenIssuancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenIssuancePolicy();
}
