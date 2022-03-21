import {ChildFoldersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChildFoldersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChildFoldersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChildFoldersResponse();
}
