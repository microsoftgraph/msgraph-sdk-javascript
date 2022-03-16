import {IntuneBrand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntuneBrandFromDiscriminatorValue(parseNode: ParseNode | undefined) : IntuneBrand {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IntuneBrand();
}
