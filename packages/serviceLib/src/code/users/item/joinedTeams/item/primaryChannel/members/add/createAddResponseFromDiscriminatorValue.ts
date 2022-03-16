import {AddResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddResponse();
}
