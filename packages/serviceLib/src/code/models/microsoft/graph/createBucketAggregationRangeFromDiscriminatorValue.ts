import {BucketAggregationRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : BucketAggregationRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BucketAggregationRange();
}
