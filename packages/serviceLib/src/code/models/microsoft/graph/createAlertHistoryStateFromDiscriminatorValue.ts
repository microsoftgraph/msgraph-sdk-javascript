import {AlertHistoryState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertHistoryStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertHistoryState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertHistoryState();
}
