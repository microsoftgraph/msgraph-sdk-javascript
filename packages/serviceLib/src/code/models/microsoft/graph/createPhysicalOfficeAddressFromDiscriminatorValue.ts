import {PhysicalOfficeAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhysicalOfficeAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhysicalOfficeAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhysicalOfficeAddress();
}
