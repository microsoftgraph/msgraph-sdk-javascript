import {TodoTaskList} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskListFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskList {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskList();
}
