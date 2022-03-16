import {CheckMemberGroupsRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberGroupsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberGroupsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberGroupsRequestBody();
}
