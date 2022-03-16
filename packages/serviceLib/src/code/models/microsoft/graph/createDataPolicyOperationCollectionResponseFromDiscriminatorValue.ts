import {DataPolicyOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataPolicyOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataPolicyOperationCollectionResponse();
}
