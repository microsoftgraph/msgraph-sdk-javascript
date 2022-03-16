import {Security} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Security {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Security();
}
