import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse();
}
