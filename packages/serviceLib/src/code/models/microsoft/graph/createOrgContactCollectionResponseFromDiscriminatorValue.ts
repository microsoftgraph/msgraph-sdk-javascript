import {OrgContactCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrgContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrgContactCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrgContactCollectionResponse();
}
