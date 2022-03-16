import {UserFlowApiConnectorConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFlowApiConnectorConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserFlowApiConnectorConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserFlowApiConnectorConfiguration();
}
