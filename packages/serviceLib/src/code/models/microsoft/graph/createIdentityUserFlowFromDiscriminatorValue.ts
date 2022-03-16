import {IdentityUserFlow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityUserFlowFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityUserFlow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityUserFlow();
}
