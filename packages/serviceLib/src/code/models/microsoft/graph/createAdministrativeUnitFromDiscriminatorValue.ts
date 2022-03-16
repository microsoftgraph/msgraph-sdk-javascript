import {AdministrativeUnit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdministrativeUnitFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdministrativeUnit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdministrativeUnit();
}
