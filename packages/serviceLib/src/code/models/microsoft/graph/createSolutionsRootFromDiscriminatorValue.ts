import {SolutionsRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutionsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : SolutionsRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SolutionsRoot();
}
