import {Json} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJsonFromDiscriminatorValue(parseNode: ParseNode | undefined) : Json {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Json();
}
