import {MobileApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileApp();
}
