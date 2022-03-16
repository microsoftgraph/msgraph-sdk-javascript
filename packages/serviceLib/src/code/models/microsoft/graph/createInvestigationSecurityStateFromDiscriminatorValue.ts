import {InvestigationSecurityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvestigationSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvestigationSecurityState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvestigationSecurityState();
}
