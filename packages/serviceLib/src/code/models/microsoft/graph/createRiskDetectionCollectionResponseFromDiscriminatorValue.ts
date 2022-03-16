import {RiskDetectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskDetectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskDetectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskDetectionCollectionResponse();
}
