import {BucketAggregationDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BucketAggregationDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BucketAggregationDefinition();
}
