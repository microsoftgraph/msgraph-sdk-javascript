import {ExternalGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalGroup();
}
