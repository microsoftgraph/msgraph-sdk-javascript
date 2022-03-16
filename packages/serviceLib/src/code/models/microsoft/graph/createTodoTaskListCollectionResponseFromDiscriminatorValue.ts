import {TodoTaskListCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskListCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskListCollectionResponse();
}
