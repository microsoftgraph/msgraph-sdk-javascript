import {RiskyUserHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserHistoryItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserHistoryItem();
}
