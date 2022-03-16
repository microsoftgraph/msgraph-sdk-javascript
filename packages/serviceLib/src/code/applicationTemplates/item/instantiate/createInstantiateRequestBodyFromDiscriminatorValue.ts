import {InstantiateRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInstantiateRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : InstantiateRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InstantiateRequestBody();
}
