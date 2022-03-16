import {RecentResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecentResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecentResponse();
}
