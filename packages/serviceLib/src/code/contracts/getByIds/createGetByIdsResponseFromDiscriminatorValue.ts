import {GetByIdsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByIdsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetByIdsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetByIdsResponse();
}
