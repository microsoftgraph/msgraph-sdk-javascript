import {AppConsentRequestScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestScope();
}
