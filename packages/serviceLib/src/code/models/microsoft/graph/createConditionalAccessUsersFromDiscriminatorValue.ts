import {ConditionalAccessUsers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessUsersFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessUsers {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessUsers();
}
