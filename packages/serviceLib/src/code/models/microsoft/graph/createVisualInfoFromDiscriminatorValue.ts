import {VisualInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVisualInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : VisualInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VisualInfo();
}
