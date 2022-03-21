import {SingleValueLegacyExtendedProperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSingleValueLegacyExtendedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SingleValueLegacyExtendedProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SingleValueLegacyExtendedProperty();
}
