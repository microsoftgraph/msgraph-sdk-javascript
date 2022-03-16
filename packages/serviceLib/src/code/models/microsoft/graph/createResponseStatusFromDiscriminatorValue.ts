import {ResponseStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResponseStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResponseStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResponseStatus();
}
