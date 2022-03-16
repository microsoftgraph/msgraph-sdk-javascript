import {UserScopeTeamsAppInstallationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserScopeTeamsAppInstallationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserScopeTeamsAppInstallationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserScopeTeamsAppInstallationCollectionResponse();
}
