import {AppRoleAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppRoleAssignment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppRoleAssignment();
}
