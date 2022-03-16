import {PendingOperations} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPendingOperationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PendingOperations {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PendingOperations();
}
