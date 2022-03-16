import {Package} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPackageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Package {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Package();
}
