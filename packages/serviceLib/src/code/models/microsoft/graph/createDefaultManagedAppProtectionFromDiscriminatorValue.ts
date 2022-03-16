import {DefaultManagedAppProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultManagedAppProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultManagedAppProtection();
}
