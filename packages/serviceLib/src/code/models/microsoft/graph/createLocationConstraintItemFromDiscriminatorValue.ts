import {LocationConstraintItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationConstraintItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationConstraintItem();
}
