import {ListItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemCollectionResponse();
}
