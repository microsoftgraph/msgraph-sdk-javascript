import {RestoreRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestoreRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestoreRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestoreRequestBody();
}
