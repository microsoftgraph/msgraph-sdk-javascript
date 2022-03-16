import {GetCachedReportRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCachedReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCachedReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCachedReportRequestBody();
}
