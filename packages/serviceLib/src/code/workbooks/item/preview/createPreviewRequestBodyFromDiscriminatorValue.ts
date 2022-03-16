import {PreviewRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPreviewRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PreviewRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PreviewRequestBody();
}
