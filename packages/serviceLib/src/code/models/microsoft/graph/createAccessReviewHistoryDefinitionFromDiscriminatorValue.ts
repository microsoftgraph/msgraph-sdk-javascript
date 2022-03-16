import {AccessReviewHistoryDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewHistoryDefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewHistoryDefinition();
}
