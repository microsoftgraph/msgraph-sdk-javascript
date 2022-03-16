import {TeamworkHostedContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkHostedContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkHostedContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkHostedContent();
}
