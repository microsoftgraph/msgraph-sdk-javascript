import {ProvisioningObjectSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningObjectSummaryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningObjectSummaryCollectionResponse();
}
