import {MarkReadRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkReadRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkReadRequestBody();
}
