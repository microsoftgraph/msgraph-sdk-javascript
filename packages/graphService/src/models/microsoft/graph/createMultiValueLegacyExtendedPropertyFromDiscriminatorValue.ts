import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMultiValueLegacyExtendedPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MultiValueLegacyExtendedProperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MultiValueLegacyExtendedProperty();
}
