import {SharedWithMeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithMeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedWithMeResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedWithMeResponse();
}
