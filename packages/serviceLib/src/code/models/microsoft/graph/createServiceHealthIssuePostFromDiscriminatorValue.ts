import {ServiceHealthIssuePost} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssuePostFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthIssuePost {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthIssuePost();
}
