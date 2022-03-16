import {WindowsInformationProtectionIPRangeCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionIPRangeCollection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionIPRangeCollection();
}
