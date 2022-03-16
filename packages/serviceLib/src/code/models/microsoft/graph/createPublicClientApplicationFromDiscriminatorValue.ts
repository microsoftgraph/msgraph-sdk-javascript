import {PublicClientApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicClientApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicClientApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicClientApplication();
}
