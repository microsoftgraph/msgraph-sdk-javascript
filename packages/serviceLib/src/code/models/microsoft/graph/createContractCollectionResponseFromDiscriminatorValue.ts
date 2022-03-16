import {ContractCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContractCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContractCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContractCollectionResponse();
}
