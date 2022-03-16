import {BooleanColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBooleanColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : BooleanColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BooleanColumn();
}
