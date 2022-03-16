import {SubjectRightsRequestDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestDetail();
}
