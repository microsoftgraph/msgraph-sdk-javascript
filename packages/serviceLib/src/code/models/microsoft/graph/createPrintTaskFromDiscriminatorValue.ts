import {PrintTask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTask();
}
