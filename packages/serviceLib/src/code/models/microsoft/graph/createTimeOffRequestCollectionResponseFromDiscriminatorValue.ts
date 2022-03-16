import {TimeOffRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffRequestCollectionResponse();
}
