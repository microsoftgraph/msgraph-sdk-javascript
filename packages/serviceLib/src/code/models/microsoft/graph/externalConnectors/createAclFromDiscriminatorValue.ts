import {Acl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAclFromDiscriminatorValue(parseNode: ParseNode | undefined) : Acl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Acl();
}
