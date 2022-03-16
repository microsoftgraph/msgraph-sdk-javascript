import {PersonOrGroupColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonOrGroupColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonOrGroupColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonOrGroupColumn();
}
