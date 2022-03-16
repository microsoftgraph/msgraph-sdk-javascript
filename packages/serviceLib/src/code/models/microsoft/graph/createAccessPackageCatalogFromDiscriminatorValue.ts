import {AccessPackageCatalog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageCatalogFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageCatalog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageCatalog();
}
