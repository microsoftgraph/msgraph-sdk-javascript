import {Group} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Group {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Group();
}
