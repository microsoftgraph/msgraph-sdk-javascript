import {ManagedAppStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatus();
}
