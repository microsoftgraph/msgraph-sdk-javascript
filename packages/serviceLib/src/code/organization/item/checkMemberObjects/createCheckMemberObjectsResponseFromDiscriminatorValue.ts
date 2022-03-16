import {CheckMemberObjectsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberObjectsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberObjectsResponse();
}
