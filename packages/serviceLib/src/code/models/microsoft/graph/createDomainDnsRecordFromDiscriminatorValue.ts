import {DomainDnsRecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsRecord();
}
