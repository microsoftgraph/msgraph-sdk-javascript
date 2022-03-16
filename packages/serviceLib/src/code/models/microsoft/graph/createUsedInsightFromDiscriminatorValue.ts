import {UsedInsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsedInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsedInsight {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsedInsight();
}
