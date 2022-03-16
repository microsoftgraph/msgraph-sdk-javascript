import {SearchResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchResponse();
}
