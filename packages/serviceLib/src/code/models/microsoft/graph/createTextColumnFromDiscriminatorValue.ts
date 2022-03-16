import {TextColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTextColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : TextColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TextColumn();
}
