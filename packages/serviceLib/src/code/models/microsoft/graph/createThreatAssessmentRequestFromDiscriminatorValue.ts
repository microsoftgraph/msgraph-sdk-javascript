import {ThreatAssessmentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentRequest();
}
