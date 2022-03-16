import {RemoteAssistancePartnerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteAssistancePartnerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteAssistancePartnerCollectionResponse();
}
