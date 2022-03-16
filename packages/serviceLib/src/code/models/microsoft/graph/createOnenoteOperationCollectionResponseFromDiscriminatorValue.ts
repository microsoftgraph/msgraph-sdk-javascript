import {OnenoteOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteOperationCollectionResponse();
}
