import {DomainCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDomainCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DomainCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DomainCollectionResponse();
}
