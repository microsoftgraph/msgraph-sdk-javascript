import {CallRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallRecordCollectionResponse();
}
