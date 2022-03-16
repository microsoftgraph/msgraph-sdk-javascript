import {NumberColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNumberColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : NumberColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NumberColumn();
}
