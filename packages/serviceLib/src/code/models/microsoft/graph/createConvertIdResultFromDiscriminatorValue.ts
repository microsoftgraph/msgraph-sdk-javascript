import {ConvertIdResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConvertIdResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConvertIdResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConvertIdResult();
}
