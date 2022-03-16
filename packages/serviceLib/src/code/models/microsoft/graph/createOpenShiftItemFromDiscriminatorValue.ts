import {OpenShiftItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenShiftItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenShiftItem();
}
