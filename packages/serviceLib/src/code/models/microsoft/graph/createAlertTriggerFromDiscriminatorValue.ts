import {AlertTrigger} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertTriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertTrigger {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertTrigger();
}
