import {OnenoteSection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteSectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteSection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteSection();
}
