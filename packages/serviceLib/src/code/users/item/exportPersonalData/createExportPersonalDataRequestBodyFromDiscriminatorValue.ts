import {ExportPersonalDataRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPersonalDataRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportPersonalDataRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportPersonalDataRequestBody();
}
