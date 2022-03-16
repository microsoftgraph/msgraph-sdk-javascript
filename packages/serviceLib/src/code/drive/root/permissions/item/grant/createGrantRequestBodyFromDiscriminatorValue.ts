import {GrantRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGrantRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GrantRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GrantRequestBody();
}
