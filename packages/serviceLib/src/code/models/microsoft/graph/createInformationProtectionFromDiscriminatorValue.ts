import {InformationProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationProtection();
}
