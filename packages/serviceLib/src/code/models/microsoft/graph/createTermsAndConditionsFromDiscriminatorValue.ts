import {TermsAndConditions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsAndConditions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsAndConditions();
}
