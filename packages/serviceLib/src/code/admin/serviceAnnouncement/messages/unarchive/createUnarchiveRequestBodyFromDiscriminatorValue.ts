import {UnarchiveRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnarchiveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnarchiveRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnarchiveRequestBody();
}
