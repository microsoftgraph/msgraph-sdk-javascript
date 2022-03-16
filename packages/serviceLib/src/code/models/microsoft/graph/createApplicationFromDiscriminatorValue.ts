import {Application} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Application {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Application();
}
