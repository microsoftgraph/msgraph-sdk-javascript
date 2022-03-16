import {DetailsInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDetailsInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : DetailsInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DetailsInfo();
}
