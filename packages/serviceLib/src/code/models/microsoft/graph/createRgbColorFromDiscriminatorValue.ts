import {RgbColor} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRgbColorFromDiscriminatorValue(parseNode: ParseNode | undefined) : RgbColor {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RgbColor();
}
