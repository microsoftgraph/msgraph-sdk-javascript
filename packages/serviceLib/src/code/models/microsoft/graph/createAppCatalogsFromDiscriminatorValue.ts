import {AppCatalogs} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppCatalogsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppCatalogs {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppCatalogs();
}
