import {ArchiveRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createArchiveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ArchiveRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ArchiveRequestBody();
}
