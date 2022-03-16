import {WindowsInformationProtectionResourceCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionResourceCollection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionResourceCollection();
}
