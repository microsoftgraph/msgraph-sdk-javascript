import {LocationConstraint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationConstraint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationConstraint();
}
