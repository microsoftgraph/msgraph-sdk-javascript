import {UserInstallStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserInstallStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserInstallStateSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserInstallStateSummary();
}
