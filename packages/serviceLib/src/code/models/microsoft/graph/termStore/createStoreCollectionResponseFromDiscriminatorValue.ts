import {StoreCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StoreCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StoreCollectionResponse();
}
