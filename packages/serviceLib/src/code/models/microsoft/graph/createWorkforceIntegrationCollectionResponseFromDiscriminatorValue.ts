import {WorkforceIntegrationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkforceIntegrationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkforceIntegrationCollectionResponse();
}
