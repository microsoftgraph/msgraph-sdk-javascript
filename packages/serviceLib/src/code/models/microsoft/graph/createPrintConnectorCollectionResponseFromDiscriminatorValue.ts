import {PrintConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintConnectorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintConnectorCollectionResponse();
}
