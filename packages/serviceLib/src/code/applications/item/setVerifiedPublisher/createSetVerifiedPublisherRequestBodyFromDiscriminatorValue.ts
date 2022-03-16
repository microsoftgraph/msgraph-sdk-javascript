import {SetVerifiedPublisherRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetVerifiedPublisherRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetVerifiedPublisherRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetVerifiedPublisherRequestBody();
}
