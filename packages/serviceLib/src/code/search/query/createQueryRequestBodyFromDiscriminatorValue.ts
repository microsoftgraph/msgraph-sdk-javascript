import {QueryRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueryRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueryRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueryRequestBody();
}
