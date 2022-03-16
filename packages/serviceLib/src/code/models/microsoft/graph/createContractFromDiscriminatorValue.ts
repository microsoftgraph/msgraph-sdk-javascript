import {Contract} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContractFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contract {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contract();
}
