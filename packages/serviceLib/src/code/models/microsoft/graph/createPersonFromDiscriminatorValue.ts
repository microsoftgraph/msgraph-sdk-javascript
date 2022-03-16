import {Person} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonFromDiscriminatorValue(parseNode: ParseNode | undefined) : Person {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Person();
}
