import {SubjectRightsRequestStageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestStageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestStageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestStageDetail();
}
