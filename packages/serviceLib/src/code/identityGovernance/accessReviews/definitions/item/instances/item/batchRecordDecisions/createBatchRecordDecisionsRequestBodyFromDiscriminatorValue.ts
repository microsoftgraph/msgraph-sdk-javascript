import {BatchRecordDecisionsRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBatchRecordDecisionsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BatchRecordDecisionsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BatchRecordDecisionsRequestBody();
}
