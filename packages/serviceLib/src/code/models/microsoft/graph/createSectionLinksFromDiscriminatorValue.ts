import {SectionLinks} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSectionLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : SectionLinks {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SectionLinks();
}
