import {OpenShiftChangeRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftChangeRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftChangeRequestCollectionResponse();
}
