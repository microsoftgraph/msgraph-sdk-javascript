import {GetEmailActivityUserDetailWithDateResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailActivityUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailActivityUserDetailWithDateResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailActivityUserDetailWithDateResponse();
}
