import {DeviceManagementExchangeConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementExchangeConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementExchangeConnectorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementExchangeConnectorCollectionResponse();
}
