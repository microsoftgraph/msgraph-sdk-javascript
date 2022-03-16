import {MdmWindowsInformationProtectionPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MdmWindowsInformationProtectionPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MdmWindowsInformationProtectionPolicyCollectionResponse();
}
