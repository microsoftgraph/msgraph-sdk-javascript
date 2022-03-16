import {DisplayNameLocalization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisplayNameLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DisplayNameLocalization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DisplayNameLocalization();
}
