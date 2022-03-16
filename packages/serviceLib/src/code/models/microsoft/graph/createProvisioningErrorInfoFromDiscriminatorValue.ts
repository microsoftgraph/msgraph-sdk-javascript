import {ProvisioningErrorInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningErrorInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningErrorInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningErrorInfo();
}
