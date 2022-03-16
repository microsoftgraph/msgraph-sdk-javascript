import {TeamsAppDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppDefinitionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppDefinitionCollectionResponse();
}
