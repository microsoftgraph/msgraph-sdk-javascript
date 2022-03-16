import {CopyRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyRequestBody();
}
