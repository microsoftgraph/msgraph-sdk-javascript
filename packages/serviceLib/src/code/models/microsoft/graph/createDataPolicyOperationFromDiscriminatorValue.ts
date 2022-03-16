import {DataPolicyOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataPolicyOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataPolicyOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataPolicyOperation();
}
