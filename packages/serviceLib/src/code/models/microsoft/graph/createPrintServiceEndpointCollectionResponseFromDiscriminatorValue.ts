import {PrintServiceEndpointCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceEndpointCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintServiceEndpointCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintServiceEndpointCollectionResponse();
}
