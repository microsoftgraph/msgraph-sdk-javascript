import {IdentityApiConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityApiConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityApiConnectorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityApiConnectorCollectionResponse();
}
