import {PhysicalAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhysicalAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhysicalAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhysicalAddress();
}
