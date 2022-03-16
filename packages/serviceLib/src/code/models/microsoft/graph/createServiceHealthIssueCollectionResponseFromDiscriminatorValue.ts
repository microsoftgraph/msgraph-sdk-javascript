import {ServiceHealthIssueCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthIssueCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthIssueCollectionResponse();
}
