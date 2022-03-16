import {DeleteUserFromSharedAppleDeviceRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteUserFromSharedAppleDeviceRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteUserFromSharedAppleDeviceRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteUserFromSharedAppleDeviceRequestBody();
}
