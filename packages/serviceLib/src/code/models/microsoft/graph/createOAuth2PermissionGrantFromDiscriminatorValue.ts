import {OAuth2PermissionGrant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOAuth2PermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) : OAuth2PermissionGrant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OAuth2PermissionGrant();
}
