import {CreateUploadSessionRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateUploadSessionRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateUploadSessionRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateUploadSessionRequestBody();
}
