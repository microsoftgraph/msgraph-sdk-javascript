import {UserIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserIdentity();
}
