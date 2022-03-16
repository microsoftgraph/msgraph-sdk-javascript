import {Quota} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quota {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quota();
}
