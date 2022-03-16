import {LocalizedLabel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedLabel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedLabel();
}
