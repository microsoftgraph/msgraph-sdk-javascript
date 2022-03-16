import {ExpirationPattern} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpirationPatternFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExpirationPattern {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExpirationPattern();
}
