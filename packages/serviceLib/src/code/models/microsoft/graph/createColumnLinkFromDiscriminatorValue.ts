import {ColumnLink} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnLink {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnLink();
}
