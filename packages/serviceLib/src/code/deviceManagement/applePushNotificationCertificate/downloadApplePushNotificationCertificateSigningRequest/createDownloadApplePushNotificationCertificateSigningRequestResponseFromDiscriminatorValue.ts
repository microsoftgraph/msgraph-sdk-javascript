import {DownloadApplePushNotificationCertificateSigningRequestResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDownloadApplePushNotificationCertificateSigningRequestResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DownloadApplePushNotificationCertificateSigningRequestResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DownloadApplePushNotificationCertificateSigningRequestResponse();
}
