import {VerifiedPublisher} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerifiedPublisherFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerifiedPublisher {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerifiedPublisher();
}
