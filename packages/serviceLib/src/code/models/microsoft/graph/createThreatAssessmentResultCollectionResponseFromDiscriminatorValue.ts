import {ThreatAssessmentResultCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentResultCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentResultCollectionResponse();
}
