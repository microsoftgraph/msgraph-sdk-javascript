import {Root} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : Root {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Root();
}
