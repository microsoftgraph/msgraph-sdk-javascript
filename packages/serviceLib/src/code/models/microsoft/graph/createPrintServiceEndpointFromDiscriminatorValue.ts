import {PrintServiceEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintServiceEndpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintServiceEndpoint();
}
