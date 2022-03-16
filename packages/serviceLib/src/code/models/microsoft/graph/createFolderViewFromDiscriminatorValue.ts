import {FolderView} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFolderViewFromDiscriminatorValue(parseNode: ParseNode | undefined) : FolderView {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FolderView();
}
