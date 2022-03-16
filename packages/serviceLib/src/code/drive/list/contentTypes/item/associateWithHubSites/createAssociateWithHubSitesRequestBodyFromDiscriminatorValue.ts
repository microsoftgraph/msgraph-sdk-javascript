import {AssociateWithHubSitesRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociateWithHubSitesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociateWithHubSitesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociateWithHubSitesRequestBody();
}
