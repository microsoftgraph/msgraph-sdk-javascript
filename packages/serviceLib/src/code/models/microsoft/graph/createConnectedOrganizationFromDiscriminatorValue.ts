import {ConnectedOrganization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectedOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectedOrganization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectedOrganization();
}
