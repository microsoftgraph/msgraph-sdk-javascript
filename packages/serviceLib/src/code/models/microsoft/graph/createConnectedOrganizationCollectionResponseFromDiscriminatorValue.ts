import {ConnectedOrganizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectedOrganizationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectedOrganizationCollectionResponse();
}
