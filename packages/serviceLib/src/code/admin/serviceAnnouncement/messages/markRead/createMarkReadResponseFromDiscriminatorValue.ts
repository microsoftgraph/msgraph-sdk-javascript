import {MarkReadResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkReadResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkReadResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkReadResponse();
}
