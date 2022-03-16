import {InviteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInviteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InviteResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InviteResponse();
}
