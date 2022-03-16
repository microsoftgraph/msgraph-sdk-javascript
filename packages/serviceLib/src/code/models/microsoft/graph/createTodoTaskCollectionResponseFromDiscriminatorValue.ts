import {TodoTaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskCollectionResponse();
}
