import {CloudAppSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAppSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudAppSecurityState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudAppSecurityState();
}
