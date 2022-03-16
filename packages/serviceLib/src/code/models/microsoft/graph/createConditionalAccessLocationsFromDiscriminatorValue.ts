import {ConditionalAccessLocations} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessLocationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessLocations {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessLocations();
}
