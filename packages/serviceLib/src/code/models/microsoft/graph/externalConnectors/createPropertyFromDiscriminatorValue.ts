import {Property} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Property {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Property();
}
