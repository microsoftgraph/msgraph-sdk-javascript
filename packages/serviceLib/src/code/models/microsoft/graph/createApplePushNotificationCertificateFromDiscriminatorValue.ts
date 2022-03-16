import {ApplePushNotificationCertificate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplePushNotificationCertificateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplePushNotificationCertificate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplePushNotificationCertificate();
}
