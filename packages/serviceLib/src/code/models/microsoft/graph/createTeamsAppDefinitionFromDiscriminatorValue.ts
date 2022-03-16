import {TeamsAppDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppDefinition();
}
