import {UserActivityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserActivityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserActivityCollectionResponse();
}
