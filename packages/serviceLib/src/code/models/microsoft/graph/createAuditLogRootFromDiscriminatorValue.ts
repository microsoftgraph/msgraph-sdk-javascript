import {AuditLogRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditLogRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuditLogRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuditLogRoot();
}
