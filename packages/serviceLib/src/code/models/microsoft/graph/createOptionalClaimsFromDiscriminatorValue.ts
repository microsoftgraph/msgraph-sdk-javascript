import {OptionalClaims} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OptionalClaims {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OptionalClaims();
}
