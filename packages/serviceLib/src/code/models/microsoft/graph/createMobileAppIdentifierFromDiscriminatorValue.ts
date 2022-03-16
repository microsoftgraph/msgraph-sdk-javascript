import {MobileAppIdentifier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppIdentifier {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppIdentifier();
}
