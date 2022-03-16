import {List} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListFromDiscriminatorValue(parseNode: ParseNode | undefined) : List {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new List();
}
