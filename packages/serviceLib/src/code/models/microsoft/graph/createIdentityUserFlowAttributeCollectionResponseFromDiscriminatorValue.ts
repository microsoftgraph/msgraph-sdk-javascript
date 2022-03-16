import {IdentityUserFlowAttributeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttributeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowAttributeCollectionResponse();
}
