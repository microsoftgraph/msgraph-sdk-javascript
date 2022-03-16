import {DismissRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDismissRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DismissRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DismissRequestBody();
}
