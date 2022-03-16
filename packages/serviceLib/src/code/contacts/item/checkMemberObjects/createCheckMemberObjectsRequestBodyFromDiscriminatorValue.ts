import {CheckMemberObjectsRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckMemberObjectsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckMemberObjectsRequestBody();
}
