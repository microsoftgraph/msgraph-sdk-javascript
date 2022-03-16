import {Site} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Site {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Site();
}
