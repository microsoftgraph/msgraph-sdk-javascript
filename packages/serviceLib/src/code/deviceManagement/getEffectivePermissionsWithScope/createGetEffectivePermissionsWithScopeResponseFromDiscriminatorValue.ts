import {GetEffectivePermissionsWithScopeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEffectivePermissionsWithScopeResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEffectivePermissionsWithScopeResponse();
}
