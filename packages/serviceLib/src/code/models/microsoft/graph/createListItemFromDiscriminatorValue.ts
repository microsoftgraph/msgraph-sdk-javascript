import {ListItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItem();
}
