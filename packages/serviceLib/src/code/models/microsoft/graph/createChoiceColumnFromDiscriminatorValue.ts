import {ChoiceColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChoiceColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChoiceColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChoiceColumn();
}
