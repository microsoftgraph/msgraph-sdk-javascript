import {PublicErrorDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicErrorDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicErrorDetail();
}
