import {Request} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Request {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Request();
}
