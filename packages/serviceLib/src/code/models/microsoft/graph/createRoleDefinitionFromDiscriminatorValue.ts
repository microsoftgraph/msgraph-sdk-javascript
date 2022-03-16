import {RoleDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleDefinition();
}
