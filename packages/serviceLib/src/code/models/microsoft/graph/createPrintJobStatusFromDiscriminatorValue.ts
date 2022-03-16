import {PrintJobStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintJobStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintJobStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintJobStatus();
}
