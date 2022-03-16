import {BaseItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseItemVersion();
}
