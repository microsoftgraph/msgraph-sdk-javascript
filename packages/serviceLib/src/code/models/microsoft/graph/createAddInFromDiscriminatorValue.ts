import {AddIn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddInFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddIn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddIn();
}
