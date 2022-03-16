import {ResultInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResultInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResultInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResultInfo();
}
