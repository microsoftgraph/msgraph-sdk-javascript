import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionNetworkLearningSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionNetworkLearningSummaryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionNetworkLearningSummaryCollectionResponse();
}
