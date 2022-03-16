import {NamedLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : NamedLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NamedLocation();
}
