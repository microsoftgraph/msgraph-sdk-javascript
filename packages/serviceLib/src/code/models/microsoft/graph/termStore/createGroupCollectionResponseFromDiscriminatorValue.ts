import {GroupCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupCollectionResponse();
}
