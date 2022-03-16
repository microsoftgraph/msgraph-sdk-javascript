import {TeamsTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTemplate();
}
