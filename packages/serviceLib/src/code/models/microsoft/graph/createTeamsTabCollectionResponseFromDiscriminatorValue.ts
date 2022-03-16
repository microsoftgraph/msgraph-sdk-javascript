import {TeamsTabCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTabCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTabCollectionResponse();
}
