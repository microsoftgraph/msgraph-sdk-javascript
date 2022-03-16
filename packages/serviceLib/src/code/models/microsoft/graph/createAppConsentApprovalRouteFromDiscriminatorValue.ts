import {AppConsentApprovalRoute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentApprovalRouteFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentApprovalRoute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentApprovalRoute();
}
