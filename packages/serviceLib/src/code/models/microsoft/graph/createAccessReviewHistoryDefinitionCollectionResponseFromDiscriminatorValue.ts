import {AccessReviewHistoryDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewHistoryDefinitionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewHistoryDefinitionCollectionResponse();
}
