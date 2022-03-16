import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetRecentNotebooksWithIncludePersonalNotebooksResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetRecentNotebooksWithIncludePersonalNotebooksResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetRecentNotebooksWithIncludePersonalNotebooksResponse();
}
