import {GetByIdsRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetByIdsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetByIdsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetByIdsRequestBody();
}
