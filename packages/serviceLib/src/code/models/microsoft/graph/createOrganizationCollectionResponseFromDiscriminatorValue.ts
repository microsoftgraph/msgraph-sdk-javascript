import {OrganizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationCollectionResponse();
}
