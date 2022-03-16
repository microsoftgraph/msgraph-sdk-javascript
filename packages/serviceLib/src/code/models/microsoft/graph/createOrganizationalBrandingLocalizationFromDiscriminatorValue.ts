import {OrganizationalBrandingLocalization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBrandingLocalization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationalBrandingLocalization();
}
