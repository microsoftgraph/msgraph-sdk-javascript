import {IsPublishedResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsPublishedResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsPublishedResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsPublishedResponse();
}
