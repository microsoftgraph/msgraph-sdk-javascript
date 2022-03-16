import {RevokeSignInSessionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRevokeSignInSessionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RevokeSignInSessionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RevokeSignInSessionsResponse();
}
