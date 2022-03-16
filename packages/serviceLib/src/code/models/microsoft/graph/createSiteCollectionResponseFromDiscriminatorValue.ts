import {SiteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SiteCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SiteCollectionResponse();
}
