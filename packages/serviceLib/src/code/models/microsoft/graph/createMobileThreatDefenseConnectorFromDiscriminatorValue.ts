import {MobileThreatDefenseConnector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileThreatDefenseConnector {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileThreatDefenseConnector();
}
