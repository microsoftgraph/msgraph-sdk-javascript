import {ItemAnalytics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAnalyticsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemAnalytics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemAnalytics();
}
