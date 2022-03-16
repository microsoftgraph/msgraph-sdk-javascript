import {Call} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallFromDiscriminatorValue(parseNode: ParseNode | undefined) : Call {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Call();
}
