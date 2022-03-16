import {WindowsDefenderScanRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDefenderScanRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsDefenderScanRequestBody();
}
