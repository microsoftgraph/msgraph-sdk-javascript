import {LicenseDetailsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLicenseDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LicenseDetailsCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LicenseDetailsCollectionResponse();
}
