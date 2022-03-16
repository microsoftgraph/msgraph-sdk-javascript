import {TimeOffCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffCollectionResponse();
}
