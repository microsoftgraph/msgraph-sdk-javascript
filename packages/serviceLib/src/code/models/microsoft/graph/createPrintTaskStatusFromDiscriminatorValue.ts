import {PrintTaskStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskStatus();
}
