import {PersistentBrowserSessionControl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersistentBrowserSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersistentBrowserSessionControl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersistentBrowserSessionControl();
}
