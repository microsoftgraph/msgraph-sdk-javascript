import {CloneRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloneRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloneRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloneRequestBody();
}
