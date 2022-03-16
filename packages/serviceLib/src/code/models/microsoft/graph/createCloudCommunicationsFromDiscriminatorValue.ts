import {CloudCommunications} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudCommunicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudCommunications {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudCommunications();
}
