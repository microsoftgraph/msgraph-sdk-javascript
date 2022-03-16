import {ManagedEBookAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBookAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedEBookAssignmentCollectionResponse();
}
