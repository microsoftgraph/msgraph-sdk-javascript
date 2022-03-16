import {OrgContact} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrgContactFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrgContact {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrgContact();
}
