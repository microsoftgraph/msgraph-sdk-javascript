import {GetPresencesByUserIdRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdRequestBody();
}
