import {DomainDnsRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainDnsRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainDnsRecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainDnsRecordCollectionResponse();
}
