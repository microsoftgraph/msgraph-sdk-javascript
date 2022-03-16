import {WindowsInformationProtectionProxiedDomainCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionProxiedDomainCollection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionProxiedDomainCollection();
}
