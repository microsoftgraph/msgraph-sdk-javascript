import {StsPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StsPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StsPolicy();
}
