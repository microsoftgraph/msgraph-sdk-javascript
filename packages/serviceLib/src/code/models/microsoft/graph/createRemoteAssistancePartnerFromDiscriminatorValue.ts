import {RemoteAssistancePartner} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteAssistancePartnerFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteAssistancePartner {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteAssistancePartner();
}
