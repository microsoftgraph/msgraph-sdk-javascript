import {AdministrativeUnitCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdministrativeUnitCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdministrativeUnitCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdministrativeUnitCollectionResponse();
}
