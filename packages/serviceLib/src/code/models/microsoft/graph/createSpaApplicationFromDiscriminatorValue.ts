import {SpaApplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSpaApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SpaApplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SpaApplication();
}
