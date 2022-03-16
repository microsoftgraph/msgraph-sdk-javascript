import {Invitation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvitationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Invitation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Invitation();
}
