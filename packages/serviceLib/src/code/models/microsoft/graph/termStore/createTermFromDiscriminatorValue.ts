import {Term} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermFromDiscriminatorValue(parseNode: ParseNode | undefined) : Term {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Term();
}
