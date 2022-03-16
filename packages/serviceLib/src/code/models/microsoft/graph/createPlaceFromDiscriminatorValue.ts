import {Place} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Place {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Place();
}
