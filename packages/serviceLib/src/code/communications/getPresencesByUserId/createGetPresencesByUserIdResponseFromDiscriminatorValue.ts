import {GetPresencesByUserIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdResponse();
}
