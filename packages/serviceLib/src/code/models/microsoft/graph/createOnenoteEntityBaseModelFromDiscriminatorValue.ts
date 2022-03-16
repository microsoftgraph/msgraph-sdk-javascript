import {OnenoteEntityBaseModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityBaseModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityBaseModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteEntityBaseModel();
}
