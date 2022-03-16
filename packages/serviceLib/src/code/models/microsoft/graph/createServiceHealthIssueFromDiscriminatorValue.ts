import {ServiceHealthIssue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceHealthIssueFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceHealthIssue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceHealthIssue();
}
