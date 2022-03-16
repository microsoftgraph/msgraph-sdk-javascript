import {CopyToSectionGroupRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionGroupRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionGroupRequestBody();
}
