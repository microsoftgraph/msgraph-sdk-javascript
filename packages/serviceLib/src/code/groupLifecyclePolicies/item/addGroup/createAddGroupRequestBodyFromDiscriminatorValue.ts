import {AddGroupRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddGroupRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddGroupRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddGroupRequestBody();
}
