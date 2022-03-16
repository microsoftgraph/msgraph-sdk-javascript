import {TeamsAsyncOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAsyncOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAsyncOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAsyncOperationCollectionResponse();
}
