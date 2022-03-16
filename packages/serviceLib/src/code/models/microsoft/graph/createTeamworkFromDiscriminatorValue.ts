import {Teamwork} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkFromDiscriminatorValue(parseNode: ParseNode | undefined) : Teamwork {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Teamwork();
}
