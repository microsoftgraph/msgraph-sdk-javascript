import {OnPremisesProvisioningError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesProvisioningErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesProvisioningError {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesProvisioningError();
}
