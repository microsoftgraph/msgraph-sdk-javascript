import {AccessPackageSubject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageSubject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageSubject();
}
