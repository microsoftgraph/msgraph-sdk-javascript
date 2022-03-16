import {TeamworkUserIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkUserIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkUserIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkUserIdentity();
}
