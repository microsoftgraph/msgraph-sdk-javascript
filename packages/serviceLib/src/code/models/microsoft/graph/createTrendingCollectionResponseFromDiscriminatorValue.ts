import {TrendingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrendingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TrendingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TrendingCollectionResponse();
}
