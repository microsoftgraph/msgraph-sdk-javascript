import {TeamsTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTemplateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTemplateCollectionResponse();
}
