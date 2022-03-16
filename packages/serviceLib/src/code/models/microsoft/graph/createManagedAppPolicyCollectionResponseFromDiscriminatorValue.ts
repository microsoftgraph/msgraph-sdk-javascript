import {ManagedAppPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppPolicyCollectionResponse();
}
