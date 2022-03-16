import {TeamsAppInstallationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstallationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppInstallationCollectionResponse();
}
