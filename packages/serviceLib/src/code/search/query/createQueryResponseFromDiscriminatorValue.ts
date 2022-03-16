import {QueryResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryResponse();
}
