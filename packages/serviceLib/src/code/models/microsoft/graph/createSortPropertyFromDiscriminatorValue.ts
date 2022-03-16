import {SortProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSortPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SortProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SortProperty();
}
