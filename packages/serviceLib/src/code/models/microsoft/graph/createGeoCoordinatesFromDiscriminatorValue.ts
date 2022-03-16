import {GeoCoordinates} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeoCoordinatesFromDiscriminatorValue(parseNode: ParseNode | undefined) : GeoCoordinates {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GeoCoordinates();
}
