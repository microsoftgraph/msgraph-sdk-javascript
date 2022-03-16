import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse();
}
