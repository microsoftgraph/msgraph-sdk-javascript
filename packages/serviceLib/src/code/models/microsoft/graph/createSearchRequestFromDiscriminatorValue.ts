import {SearchRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SearchRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SearchRequest();
}
