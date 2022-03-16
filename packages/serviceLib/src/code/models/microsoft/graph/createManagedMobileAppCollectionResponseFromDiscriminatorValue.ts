import {ManagedMobileAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedMobileAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedMobileAppCollectionResponse();
}
