import {StoragePlanInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoragePlanInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : StoragePlanInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StoragePlanInformation();
}
