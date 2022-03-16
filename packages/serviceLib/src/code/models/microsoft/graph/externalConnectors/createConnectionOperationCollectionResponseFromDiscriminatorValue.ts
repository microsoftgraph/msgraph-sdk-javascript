import {ConnectionOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectionOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectionOperationCollectionResponse();
}
