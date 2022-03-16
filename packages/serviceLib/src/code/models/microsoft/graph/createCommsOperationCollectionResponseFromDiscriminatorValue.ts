import {CommsOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommsOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CommsOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommsOperationCollectionResponse();
}
