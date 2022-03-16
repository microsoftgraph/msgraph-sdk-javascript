import {ManagedAppOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppOperation();
}
