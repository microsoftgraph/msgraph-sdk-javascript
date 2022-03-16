import {OrganizationalBranding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationalBrandingFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationalBranding {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationalBranding();
}
