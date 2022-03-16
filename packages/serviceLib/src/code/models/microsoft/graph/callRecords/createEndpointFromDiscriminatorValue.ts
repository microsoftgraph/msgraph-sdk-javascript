import {Endpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : Endpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Endpoint();
}
