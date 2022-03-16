import {RestrictedSignInCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestrictedSignInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestrictedSignInCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestrictedSignInCollectionResponse();
}
