import {Organization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Organization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Organization();
}
