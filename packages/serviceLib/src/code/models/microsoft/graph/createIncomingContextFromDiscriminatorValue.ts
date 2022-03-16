import {IncomingContext} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncomingContextFromDiscriminatorValue(parseNode: ParseNode | undefined) : IncomingContext {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IncomingContext();
}
