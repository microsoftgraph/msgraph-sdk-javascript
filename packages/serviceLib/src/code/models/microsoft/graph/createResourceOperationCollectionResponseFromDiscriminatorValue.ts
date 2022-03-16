import {ResourceOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceOperationCollectionResponse();
}
