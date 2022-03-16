import {OAuth2PermissionGrantCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OAuth2PermissionGrantCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OAuth2PermissionGrantCollectionResponse();
}
