import {UnifiedRoleDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnifiedRoleDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnifiedRoleDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnifiedRoleDefinition();
}
