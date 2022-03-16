import {TokenIssuancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenIssuancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenIssuancePolicyCollectionResponse();
}
