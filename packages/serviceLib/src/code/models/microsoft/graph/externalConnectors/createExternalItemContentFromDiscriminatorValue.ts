import {ExternalItemContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalItemContent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalItemContent();
}
