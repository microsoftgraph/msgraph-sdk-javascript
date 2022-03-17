import {OverridesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOverridesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OverridesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OverridesResponse();
}
