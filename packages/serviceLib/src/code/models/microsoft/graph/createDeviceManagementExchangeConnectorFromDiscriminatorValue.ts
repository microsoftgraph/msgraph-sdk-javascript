import {DeviceManagementExchangeConnector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExchangeConnector {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExchangeConnector();
}
