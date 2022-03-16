import {AccessPackage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackage();
}
