import {CheckGrantedPermissionsForAppResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckGrantedPermissionsForAppResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CheckGrantedPermissionsForAppResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CheckGrantedPermissionsForAppResponse();
}
