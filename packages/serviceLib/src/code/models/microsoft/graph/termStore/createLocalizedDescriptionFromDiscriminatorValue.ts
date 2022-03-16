import {LocalizedDescription} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedDescriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedDescription {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedDescription();
}
