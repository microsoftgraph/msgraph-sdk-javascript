import {CreateForwardRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateForwardRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateForwardRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateForwardRequestBody();
}
