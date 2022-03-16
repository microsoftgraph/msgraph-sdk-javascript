import {OnenoteEntityHierarchyModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityHierarchyModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityHierarchyModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteEntityHierarchyModel();
}
