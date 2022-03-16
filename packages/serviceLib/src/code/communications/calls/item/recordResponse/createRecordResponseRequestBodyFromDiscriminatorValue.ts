import {RecordResponseRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordResponseRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordResponseRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordResponseRequestBody();
}
