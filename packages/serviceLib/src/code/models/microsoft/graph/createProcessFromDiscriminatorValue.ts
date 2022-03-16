import {Process} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Process {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Process();
}
