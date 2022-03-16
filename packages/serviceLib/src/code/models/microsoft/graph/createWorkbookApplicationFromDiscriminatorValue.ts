import {WorkbookApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookApplication();
}
