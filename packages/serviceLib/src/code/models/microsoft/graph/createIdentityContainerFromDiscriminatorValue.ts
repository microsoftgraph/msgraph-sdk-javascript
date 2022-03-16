import {IdentityContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityContainer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityContainer();
}
