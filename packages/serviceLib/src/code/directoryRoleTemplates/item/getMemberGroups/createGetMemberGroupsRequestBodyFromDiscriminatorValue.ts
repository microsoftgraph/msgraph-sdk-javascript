import {GetMemberGroupsRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberGroupsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberGroupsRequestBody();
}
