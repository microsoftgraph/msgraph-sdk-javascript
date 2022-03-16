import {CopyToDefaultContentLocationRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToDefaultContentLocationRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToDefaultContentLocationRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToDefaultContentLocationRequestBody();
}
