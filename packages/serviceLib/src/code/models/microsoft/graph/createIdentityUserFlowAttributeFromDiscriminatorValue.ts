import {IdentityUserFlowAttribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlowAttribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlowAttribute();
}
