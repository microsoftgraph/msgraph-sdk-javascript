import {B2xIdentityUserFlowCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createB2xIdentityUserFlowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : B2xIdentityUserFlowCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new B2xIdentityUserFlowCollectionResponse();
}
