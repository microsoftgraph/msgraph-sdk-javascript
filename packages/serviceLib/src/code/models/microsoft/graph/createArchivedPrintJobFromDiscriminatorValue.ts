import {ArchivedPrintJob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchivedPrintJobFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArchivedPrintJob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArchivedPrintJob();
}
