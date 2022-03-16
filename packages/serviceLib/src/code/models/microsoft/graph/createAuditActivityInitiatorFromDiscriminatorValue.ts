import {AuditActivityInitiator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditActivityInitiatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditActivityInitiator {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditActivityInitiator();
}
