import {SectionGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSectionGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : SectionGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SectionGroup();
}
