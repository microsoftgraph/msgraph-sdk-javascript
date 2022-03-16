import {RemoveResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveResponse();
}
