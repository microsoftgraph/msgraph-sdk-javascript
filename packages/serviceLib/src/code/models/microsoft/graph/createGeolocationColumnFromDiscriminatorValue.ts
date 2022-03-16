import {GeolocationColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeolocationColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : GeolocationColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GeolocationColumn();
}
