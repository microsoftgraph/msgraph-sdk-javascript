import {TokenLifetimePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenLifetimePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenLifetimePolicyCollectionResponse();
}
