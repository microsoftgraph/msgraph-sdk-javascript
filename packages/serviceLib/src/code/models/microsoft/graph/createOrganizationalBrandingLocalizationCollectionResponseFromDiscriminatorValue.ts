import {OrganizationalBrandingLocalizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingLocalizationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationalBrandingLocalizationCollectionResponse();
}
