import {GrantResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGrantResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GrantResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GrantResponse();
}
