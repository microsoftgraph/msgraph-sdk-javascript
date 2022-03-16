import {ManagedEBookAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBookAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedEBookAssignment();
}
