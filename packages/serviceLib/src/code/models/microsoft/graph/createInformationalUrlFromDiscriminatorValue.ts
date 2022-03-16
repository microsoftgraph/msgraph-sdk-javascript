import {InformationalUrl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationalUrlFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationalUrl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationalUrl();
}
