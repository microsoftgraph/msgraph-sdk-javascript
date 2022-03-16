import {SetPresenceRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetPresenceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetPresenceRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetPresenceRequestBody();
}
