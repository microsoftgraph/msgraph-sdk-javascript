import {Location} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Location {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Location();
}
