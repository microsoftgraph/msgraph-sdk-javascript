import {CreateRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateRequestBody();
}
