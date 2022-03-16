import {GetMemberGroupsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberGroupsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMemberGroupsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMemberGroupsResponse();
}
