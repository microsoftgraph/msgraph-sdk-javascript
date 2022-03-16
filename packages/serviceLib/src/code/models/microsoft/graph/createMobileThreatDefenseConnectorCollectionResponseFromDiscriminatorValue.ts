import {MobileThreatDefenseConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileThreatDefenseConnectorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileThreatDefenseConnectorCollectionResponse();
}
