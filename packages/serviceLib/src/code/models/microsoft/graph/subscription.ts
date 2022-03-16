import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Subscription extends Entity implements Parsable {
    /** Optional. Identifier of the application used to create the subscription. Read-only.  */
    private _applicationId?: string | undefined;
    /** Required. Indicates the type of change in the subscribed resource that will raise a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Note:  Drive root item and list change notifications support only the updated changeType. User and group change notifications support updated and deleted changeType.  */
    private _changeType?: string | undefined;
    /** Optional. Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 128 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each change notification.  */
    private _clientState?: string | undefined;
    /** Optional. Identifier of the user or service principal that created the subscription. If the app used delegated permissions to create the subscription, this field contains the id of the signed-in user the app called on behalf of. If the app used application permissions, this field contains the id of the service principal corresponding to the app. Read-only.  */
    private _creatorId?: string | undefined;
    /** Optional. A base64-encoded representation of a certificate with a public key used to encrypt resource data in change notifications. Optional but required when includeResourceData is true.  */
    private _encryptionCertificate?: string | undefined;
    /** Optional. A custom app-provided identifier to help identify the certificate needed to decrypt resource data.  */
    private _encryptionCertificateId?: string | undefined;
    /** Required. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. For the maximum supported subscription length of time, see the table below.  */
    private _expirationDateTime?: Date | undefined;
    /** Optional. When set to true, change notifications include resource data (such as content of a chat message).  */
    private _includeResourceData?: boolean | undefined;
    /** Optional. Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these subscribers, not setting this property per the timeline would result in subscription operations failing. For subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases, Microsoft Graph defaults the property to v1_2.  */
    private _latestSupportedTlsVersion?: string | undefined;
    /** Optional. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved and missed notifications. This URL must make use of the HTTPS protocol.  */
    private _lifecycleNotificationUrl?: string | undefined;
    /** Optional. OData query options for specifying value for the targeting resource. Clients receive notifications when resource reaches the state matching the query options provided here. With this new property in the subscription creation payload along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state mentioned in the notificationQueryOptions property. For example, when the print job is completed or when a print job resource isFetchable property value becomes true etc.  */
    private _notificationQueryOptions?: string | undefined;
    /** Required. The URL of the endpoint that will receive the change notifications. This URL must make use of the HTTPS protocol.  */
    private _notificationUrl?: string | undefined;
    /** Optional. The app ID that the subscription service can use to generate the validation token. This allows the client to validate the authenticity of the notification received.  */
    private _notificationUrlAppId?: string | undefined;
    /** Required. Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/). See the possible resource path values for each supported resource.  */
    private _resource?: string | undefined;
    /**
     * Gets the applicationId property value. Optional. Identifier of the application used to create the subscription. Read-only.
     * @returns a string
     */
    public get applicationId() {
        return this._applicationId;
    };
    /**
     * Sets the applicationId property value. Optional. Identifier of the application used to create the subscription. Read-only.
     * @param value Value to set for the applicationId property.
     */
    public set applicationId(value: string | undefined) {
        this._applicationId = value;
    };
    /**
     * Gets the changeType property value. Required. Indicates the type of change in the subscribed resource that will raise a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Note:  Drive root item and list change notifications support only the updated changeType. User and group change notifications support updated and deleted changeType.
     * @returns a string
     */
    public get changeType() {
        return this._changeType;
    };
    /**
     * Sets the changeType property value. Required. Indicates the type of change in the subscribed resource that will raise a change notification. The supported values are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Note:  Drive root item and list change notifications support only the updated changeType. User and group change notifications support updated and deleted changeType.
     * @param value Value to set for the changeType property.
     */
    public set changeType(value: string | undefined) {
        this._changeType = value;
    };
    /**
     * Gets the clientState property value. Optional. Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 128 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each change notification.
     * @returns a string
     */
    public get clientState() {
        return this._clientState;
    };
    /**
     * Sets the clientState property value. Optional. Specifies the value of the clientState property sent by the service in each change notification. The maximum length is 128 characters. The client can check that the change notification came from the service by comparing the value of the clientState property sent with the subscription with the value of the clientState property received with each change notification.
     * @param value Value to set for the clientState property.
     */
    public set clientState(value: string | undefined) {
        this._clientState = value;
    };
    /**
     * Instantiates a new subscription and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the creatorId property value. Optional. Identifier of the user or service principal that created the subscription. If the app used delegated permissions to create the subscription, this field contains the id of the signed-in user the app called on behalf of. If the app used application permissions, this field contains the id of the service principal corresponding to the app. Read-only.
     * @returns a string
     */
    public get creatorId() {
        return this._creatorId;
    };
    /**
     * Sets the creatorId property value. Optional. Identifier of the user or service principal that created the subscription. If the app used delegated permissions to create the subscription, this field contains the id of the signed-in user the app called on behalf of. If the app used application permissions, this field contains the id of the service principal corresponding to the app. Read-only.
     * @param value Value to set for the creatorId property.
     */
    public set creatorId(value: string | undefined) {
        this._creatorId = value;
    };
    /**
     * Gets the encryptionCertificate property value. Optional. A base64-encoded representation of a certificate with a public key used to encrypt resource data in change notifications. Optional but required when includeResourceData is true.
     * @returns a string
     */
    public get encryptionCertificate() {
        return this._encryptionCertificate;
    };
    /**
     * Sets the encryptionCertificate property value. Optional. A base64-encoded representation of a certificate with a public key used to encrypt resource data in change notifications. Optional but required when includeResourceData is true.
     * @param value Value to set for the encryptionCertificate property.
     */
    public set encryptionCertificate(value: string | undefined) {
        this._encryptionCertificate = value;
    };
    /**
     * Gets the encryptionCertificateId property value. Optional. A custom app-provided identifier to help identify the certificate needed to decrypt resource data.
     * @returns a string
     */
    public get encryptionCertificateId() {
        return this._encryptionCertificateId;
    };
    /**
     * Sets the encryptionCertificateId property value. Optional. A custom app-provided identifier to help identify the certificate needed to decrypt resource data.
     * @param value Value to set for the encryptionCertificateId property.
     */
    public set encryptionCertificateId(value: string | undefined) {
        this._encryptionCertificateId = value;
    };
    /**
     * Gets the expirationDateTime property value. Required. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. For the maximum supported subscription length of time, see the table below.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Required. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. For the maximum supported subscription length of time, see the table below.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["applicationId", (o, n) => { (o as unknown as Subscription).applicationId = n.getStringValue(); }],
            ["changeType", (o, n) => { (o as unknown as Subscription).changeType = n.getStringValue(); }],
            ["clientState", (o, n) => { (o as unknown as Subscription).clientState = n.getStringValue(); }],
            ["creatorId", (o, n) => { (o as unknown as Subscription).creatorId = n.getStringValue(); }],
            ["encryptionCertificate", (o, n) => { (o as unknown as Subscription).encryptionCertificate = n.getStringValue(); }],
            ["encryptionCertificateId", (o, n) => { (o as unknown as Subscription).encryptionCertificateId = n.getStringValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as Subscription).expirationDateTime = n.getDateValue(); }],
            ["includeResourceData", (o, n) => { (o as unknown as Subscription).includeResourceData = n.getBooleanValue(); }],
            ["latestSupportedTlsVersion", (o, n) => { (o as unknown as Subscription).latestSupportedTlsVersion = n.getStringValue(); }],
            ["lifecycleNotificationUrl", (o, n) => { (o as unknown as Subscription).lifecycleNotificationUrl = n.getStringValue(); }],
            ["notificationQueryOptions", (o, n) => { (o as unknown as Subscription).notificationQueryOptions = n.getStringValue(); }],
            ["notificationUrl", (o, n) => { (o as unknown as Subscription).notificationUrl = n.getStringValue(); }],
            ["notificationUrlAppId", (o, n) => { (o as unknown as Subscription).notificationUrlAppId = n.getStringValue(); }],
            ["resource", (o, n) => { (o as unknown as Subscription).resource = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the includeResourceData property value. Optional. When set to true, change notifications include resource data (such as content of a chat message).
     * @returns a boolean
     */
    public get includeResourceData() {
        return this._includeResourceData;
    };
    /**
     * Sets the includeResourceData property value. Optional. When set to true, change notifications include resource data (such as content of a chat message).
     * @param value Value to set for the includeResourceData property.
     */
    public set includeResourceData(value: boolean | undefined) {
        this._includeResourceData = value;
    };
    /**
     * Gets the latestSupportedTlsVersion property value. Optional. Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these subscribers, not setting this property per the timeline would result in subscription operations failing. For subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases, Microsoft Graph defaults the property to v1_2.
     * @returns a string
     */
    public get latestSupportedTlsVersion() {
        return this._latestSupportedTlsVersion;
    };
    /**
     * Sets the latestSupportedTlsVersion property value. Optional. Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these subscribers, not setting this property per the timeline would result in subscription operations failing. For subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases, Microsoft Graph defaults the property to v1_2.
     * @param value Value to set for the latestSupportedTlsVersion property.
     */
    public set latestSupportedTlsVersion(value: string | undefined) {
        this._latestSupportedTlsVersion = value;
    };
    /**
     * Gets the lifecycleNotificationUrl property value. Optional. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved and missed notifications. This URL must make use of the HTTPS protocol.
     * @returns a string
     */
    public get lifecycleNotificationUrl() {
        return this._lifecycleNotificationUrl;
    };
    /**
     * Sets the lifecycleNotificationUrl property value. Optional. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved and missed notifications. This URL must make use of the HTTPS protocol.
     * @param value Value to set for the lifecycleNotificationUrl property.
     */
    public set lifecycleNotificationUrl(value: string | undefined) {
        this._lifecycleNotificationUrl = value;
    };
    /**
     * Gets the notificationQueryOptions property value. Optional. OData query options for specifying value for the targeting resource. Clients receive notifications when resource reaches the state matching the query options provided here. With this new property in the subscription creation payload along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state mentioned in the notificationQueryOptions property. For example, when the print job is completed or when a print job resource isFetchable property value becomes true etc.
     * @returns a string
     */
    public get notificationQueryOptions() {
        return this._notificationQueryOptions;
    };
    /**
     * Sets the notificationQueryOptions property value. Optional. OData query options for specifying value for the targeting resource. Clients receive notifications when resource reaches the state matching the query options provided here. With this new property in the subscription creation payload along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state mentioned in the notificationQueryOptions property. For example, when the print job is completed or when a print job resource isFetchable property value becomes true etc.
     * @param value Value to set for the notificationQueryOptions property.
     */
    public set notificationQueryOptions(value: string | undefined) {
        this._notificationQueryOptions = value;
    };
    /**
     * Gets the notificationUrl property value. Required. The URL of the endpoint that will receive the change notifications. This URL must make use of the HTTPS protocol.
     * @returns a string
     */
    public get notificationUrl() {
        return this._notificationUrl;
    };
    /**
     * Sets the notificationUrl property value. Required. The URL of the endpoint that will receive the change notifications. This URL must make use of the HTTPS protocol.
     * @param value Value to set for the notificationUrl property.
     */
    public set notificationUrl(value: string | undefined) {
        this._notificationUrl = value;
    };
    /**
     * Gets the notificationUrlAppId property value. Optional. The app ID that the subscription service can use to generate the validation token. This allows the client to validate the authenticity of the notification received.
     * @returns a string
     */
    public get notificationUrlAppId() {
        return this._notificationUrlAppId;
    };
    /**
     * Sets the notificationUrlAppId property value. Optional. The app ID that the subscription service can use to generate the validation token. This allows the client to validate the authenticity of the notification received.
     * @param value Value to set for the notificationUrlAppId property.
     */
    public set notificationUrlAppId(value: string | undefined) {
        this._notificationUrlAppId = value;
    };
    /**
     * Gets the resource property value. Required. Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/). See the possible resource path values for each supported resource.
     * @returns a string
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. Required. Specifies the resource that will be monitored for changes. Do not include the base URL (https://graph.microsoft.com/v1.0/). See the possible resource path values for each supported resource.
     * @param value Value to set for the resource property.
     */
    public set resource(value: string | undefined) {
        this._resource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("applicationId", this.applicationId);
        writer.writeStringValue("changeType", this.changeType);
        writer.writeStringValue("clientState", this.clientState);
        writer.writeStringValue("creatorId", this.creatorId);
        writer.writeStringValue("encryptionCertificate", this.encryptionCertificate);
        writer.writeStringValue("encryptionCertificateId", this.encryptionCertificateId);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeBooleanValue("includeResourceData", this.includeResourceData);
        writer.writeStringValue("latestSupportedTlsVersion", this.latestSupportedTlsVersion);
        writer.writeStringValue("lifecycleNotificationUrl", this.lifecycleNotificationUrl);
        writer.writeStringValue("notificationQueryOptions", this.notificationQueryOptions);
        writer.writeStringValue("notificationUrl", this.notificationUrl);
        writer.writeStringValue("notificationUrlAppId", this.notificationUrlAppId);
        writer.writeStringValue("resource", this.resource);
    };
}
