import {AppScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppScope();
}
