import {ListItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ListItemVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ListItemVersion();
}
