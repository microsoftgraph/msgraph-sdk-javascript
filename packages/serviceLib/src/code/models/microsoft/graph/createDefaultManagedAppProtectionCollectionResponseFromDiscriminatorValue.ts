import {DefaultManagedAppProtectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DefaultManagedAppProtectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DefaultManagedAppProtectionCollectionResponse();
}
