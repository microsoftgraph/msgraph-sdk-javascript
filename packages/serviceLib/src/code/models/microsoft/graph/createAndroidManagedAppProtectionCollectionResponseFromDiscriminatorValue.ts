import {AndroidManagedAppProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidManagedAppProtectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidManagedAppProtectionCollectionResponse();
}
