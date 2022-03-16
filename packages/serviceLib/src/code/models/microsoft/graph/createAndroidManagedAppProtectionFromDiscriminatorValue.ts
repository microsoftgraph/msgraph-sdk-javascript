import {AndroidManagedAppProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidManagedAppProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidManagedAppProtection();
}
