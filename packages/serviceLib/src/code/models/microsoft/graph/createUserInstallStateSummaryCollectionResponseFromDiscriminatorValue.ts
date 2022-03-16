import {UserInstallStateSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserInstallStateSummaryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserInstallStateSummaryCollectionResponse();
}
