import {GetManagedAppDiagnosticStatusesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppDiagnosticStatusesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetManagedAppDiagnosticStatusesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetManagedAppDiagnosticStatusesResponse();
}
