import {ThreatAssessmentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThreatAssessmentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ThreatAssessmentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ThreatAssessmentRequestCollectionResponse();
}
