import {Attachment} from './attachment';
import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createFollowupFlagFromDiscriminatorValue} from './createFollowupFlagFromDiscriminatorValue';
import {createInternetMessageHeaderFromDiscriminatorValue} from './createInternetMessageHeaderFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {Extension} from './extension';
import {FollowupFlag} from './followupFlag';
import {Importance} from './importance';
import {InferenceClassificationType} from './inferenceClassificationType';
import {InternetMessageHeader} from './internetMessageHeader';
import {ItemBody} from './itemBody';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OutlookItem} from './outlookItem';
import {Recipient} from './recipient';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Message extends OutlookItem implements Parsable {
    /** The fileAttachment and itemAttachment attachments for the message.  */
    private _attachments?: Attachment[] | undefined;
    /** The Bcc: recipients for the message.  */
    private _bccRecipients?: Recipient[] | undefined;
    private _body?: ItemBody | undefined;
    /** The first 255 characters of the message body. It is in text format.  */
    private _bodyPreview?: string | undefined;
    /** The Cc: recipients for the message.  */
    private _ccRecipients?: Recipient[] | undefined;
    /** The ID of the conversation the email belongs to.  */
    private _conversationId?: string | undefined;
    /** Indicates the position of the message within the conversation.  */
    private _conversationIndex?: string | undefined;
    /** The collection of open extensions defined for the message. Nullable.  */
    private _extensions?: Extension[] | undefined;
    private _flag?: FollowupFlag | undefined;
    private _from?: Recipient | undefined;
    /** Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.  */
    private _hasAttachments?: boolean | undefined;
    private _importance?: Importance | undefined;
    private _inferenceClassification?: InferenceClassificationType | undefined;
    private _internetMessageHeaders?: InternetMessageHeader[] | undefined;
    private _internetMessageId?: string | undefined;
    private _isDeliveryReceiptRequested?: boolean | undefined;
    private _isDraft?: boolean | undefined;
    private _isRead?: boolean | undefined;
    private _isReadReceiptRequested?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the message. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    private _parentFolderId?: string | undefined;
    private _receivedDateTime?: Date | undefined;
    private _replyTo?: Recipient[] | undefined;
    private _sender?: Recipient | undefined;
    private _sentDateTime?: Date | undefined;
    /** The collection of single-value extended properties defined for the message. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    private _subject?: string | undefined;
    private _toRecipients?: Recipient[] | undefined;
    private _uniqueBody?: ItemBody | undefined;
    private _webLink?: string | undefined;
    /**
     * Gets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @returns a attachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Gets the bccRecipients property value. The Bcc: recipients for the message.
     * @returns a recipient
     */
    public get bccRecipients() {
        return this._bccRecipients;
    };
    /**
     * Sets the bccRecipients property value. The Bcc: recipients for the message.
     * @param value Value to set for the bccRecipients property.
     */
    public set bccRecipients(value: Recipient[] | undefined) {
        this._bccRecipients = value;
    };
    /**
     * Gets the body property value. 
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. 
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Gets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @returns a string
     */
    public get bodyPreview() {
        return this._bodyPreview;
    };
    /**
     * Sets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @param value Value to set for the bodyPreview property.
     */
    public set bodyPreview(value: string | undefined) {
        this._bodyPreview = value;
    };
    /**
     * Gets the ccRecipients property value. The Cc: recipients for the message.
     * @returns a recipient
     */
    public get ccRecipients() {
        return this._ccRecipients;
    };
    /**
     * Sets the ccRecipients property value. The Cc: recipients for the message.
     * @param value Value to set for the ccRecipients property.
     */
    public set ccRecipients(value: Recipient[] | undefined) {
        this._ccRecipients = value;
    };
    /**
     * Instantiates a new message and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationId property value. The ID of the conversation the email belongs to.
     * @returns a string
     */
    public get conversationId() {
        return this._conversationId;
    };
    /**
     * Sets the conversationId property value. The ID of the conversation the email belongs to.
     * @param value Value to set for the conversationId property.
     */
    public set conversationId(value: string | undefined) {
        this._conversationId = value;
    };
    /**
     * Gets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @returns a binary
     */
    public get conversationIndex() {
        return this._conversationIndex;
    };
    /**
     * Sets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @param value Value to set for the conversationIndex property.
     */
    public set conversationIndex(value: string | undefined) {
        this._conversationIndex = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Gets the flag property value. 
     * @returns a followupFlag
     */
    public get flag() {
        return this._flag;
    };
    /**
     * Sets the flag property value. 
     * @param value Value to set for the flag property.
     */
    public set flag(value: FollowupFlag | undefined) {
        this._flag = value;
    };
    /**
     * Gets the from property value. 
     * @returns a recipient
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. 
     * @param value Value to set for the from property.
     */
    public set from(value: Recipient | undefined) {
        this._from = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["attachments", (o, n) => { (o as unknown as Message).attachments = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); }],
            ["bccRecipients", (o, n) => { (o as unknown as Message).bccRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["body", (o, n) => { (o as unknown as Message).body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); }],
            ["bodyPreview", (o, n) => { (o as unknown as Message).bodyPreview = n.getStringValue(); }],
            ["ccRecipients", (o, n) => { (o as unknown as Message).ccRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["conversationId", (o, n) => { (o as unknown as Message).conversationId = n.getStringValue(); }],
            ["conversationIndex", (o, n) => { (o as unknown as Message).conversationIndex = n.getStringValue(); }],
            ["extensions", (o, n) => { (o as unknown as Message).extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); }],
            ["flag", (o, n) => { (o as unknown as Message).flag = n.getObjectValue<FollowupFlag>(createFollowupFlagFromDiscriminatorValue); }],
            ["from", (o, n) => { (o as unknown as Message).from = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["hasAttachments", (o, n) => { (o as unknown as Message).hasAttachments = n.getBooleanValue(); }],
            ["importance", (o, n) => { (o as unknown as Message).importance = n.getEnumValue<Importance>(Importance); }],
            ["inferenceClassification", (o, n) => { (o as unknown as Message).inferenceClassification = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType); }],
            ["internetMessageHeaders", (o, n) => { (o as unknown as Message).internetMessageHeaders = n.getCollectionOfObjectValues<InternetMessageHeader>(createInternetMessageHeaderFromDiscriminatorValue); }],
            ["internetMessageId", (o, n) => { (o as unknown as Message).internetMessageId = n.getStringValue(); }],
            ["isDeliveryReceiptRequested", (o, n) => { (o as unknown as Message).isDeliveryReceiptRequested = n.getBooleanValue(); }],
            ["isDraft", (o, n) => { (o as unknown as Message).isDraft = n.getBooleanValue(); }],
            ["isRead", (o, n) => { (o as unknown as Message).isRead = n.getBooleanValue(); }],
            ["isReadReceiptRequested", (o, n) => { (o as unknown as Message).isReadReceiptRequested = n.getBooleanValue(); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as Message).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); }],
            ["parentFolderId", (o, n) => { (o as unknown as Message).parentFolderId = n.getStringValue(); }],
            ["receivedDateTime", (o, n) => { (o as unknown as Message).receivedDateTime = n.getDateValue(); }],
            ["replyTo", (o, n) => { (o as unknown as Message).replyTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["sender", (o, n) => { (o as unknown as Message).sender = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["sentDateTime", (o, n) => { (o as unknown as Message).sentDateTime = n.getDateValue(); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as Message).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); }],
            ["subject", (o, n) => { (o as unknown as Message).subject = n.getStringValue(); }],
            ["toRecipients", (o, n) => { (o as unknown as Message).toRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["uniqueBody", (o, n) => { (o as unknown as Message).uniqueBody = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); }],
            ["webLink", (o, n) => { (o as unknown as Message).webLink = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the importance property value. 
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. 
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the inferenceClassification property value. 
     * @returns a inferenceClassificationType
     */
    public get inferenceClassification() {
        return this._inferenceClassification;
    };
    /**
     * Sets the inferenceClassification property value. 
     * @param value Value to set for the inferenceClassification property.
     */
    public set inferenceClassification(value: InferenceClassificationType | undefined) {
        this._inferenceClassification = value;
    };
    /**
     * Gets the internetMessageHeaders property value. 
     * @returns a internetMessageHeader
     */
    public get internetMessageHeaders() {
        return this._internetMessageHeaders;
    };
    /**
     * Sets the internetMessageHeaders property value. 
     * @param value Value to set for the internetMessageHeaders property.
     */
    public set internetMessageHeaders(value: InternetMessageHeader[] | undefined) {
        this._internetMessageHeaders = value;
    };
    /**
     * Gets the internetMessageId property value. 
     * @returns a string
     */
    public get internetMessageId() {
        return this._internetMessageId;
    };
    /**
     * Sets the internetMessageId property value. 
     * @param value Value to set for the internetMessageId property.
     */
    public set internetMessageId(value: string | undefined) {
        this._internetMessageId = value;
    };
    /**
     * Gets the isDeliveryReceiptRequested property value. 
     * @returns a boolean
     */
    public get isDeliveryReceiptRequested() {
        return this._isDeliveryReceiptRequested;
    };
    /**
     * Sets the isDeliveryReceiptRequested property value. 
     * @param value Value to set for the isDeliveryReceiptRequested property.
     */
    public set isDeliveryReceiptRequested(value: boolean | undefined) {
        this._isDeliveryReceiptRequested = value;
    };
    /**
     * Gets the isDraft property value. 
     * @returns a boolean
     */
    public get isDraft() {
        return this._isDraft;
    };
    /**
     * Sets the isDraft property value. 
     * @param value Value to set for the isDraft property.
     */
    public set isDraft(value: boolean | undefined) {
        this._isDraft = value;
    };
    /**
     * Gets the isRead property value. 
     * @returns a boolean
     */
    public get isRead() {
        return this._isRead;
    };
    /**
     * Sets the isRead property value. 
     * @param value Value to set for the isRead property.
     */
    public set isRead(value: boolean | undefined) {
        this._isRead = value;
    };
    /**
     * Gets the isReadReceiptRequested property value. 
     * @returns a boolean
     */
    public get isReadReceiptRequested() {
        return this._isReadReceiptRequested;
    };
    /**
     * Sets the isReadReceiptRequested property value. 
     * @param value Value to set for the isReadReceiptRequested property.
     */
    public set isReadReceiptRequested(value: boolean | undefined) {
        this._isReadReceiptRequested = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the parentFolderId property value. 
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Sets the parentFolderId property value. 
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Gets the receivedDateTime property value. 
     * @returns a Date
     */
    public get receivedDateTime() {
        return this._receivedDateTime;
    };
    /**
     * Sets the receivedDateTime property value. 
     * @param value Value to set for the receivedDateTime property.
     */
    public set receivedDateTime(value: Date | undefined) {
        this._receivedDateTime = value;
    };
    /**
     * Gets the replyTo property value. 
     * @returns a recipient
     */
    public get replyTo() {
        return this._replyTo;
    };
    /**
     * Sets the replyTo property value. 
     * @param value Value to set for the replyTo property.
     */
    public set replyTo(value: Recipient[] | undefined) {
        this._replyTo = value;
    };
    /**
     * Gets the sender property value. 
     * @returns a recipient
     */
    public get sender() {
        return this._sender;
    };
    /**
     * Sets the sender property value. 
     * @param value Value to set for the sender property.
     */
    public set sender(value: Recipient | undefined) {
        this._sender = value;
    };
    /**
     * Gets the sentDateTime property value. 
     * @returns a Date
     */
    public get sentDateTime() {
        return this._sentDateTime;
    };
    /**
     * Sets the sentDateTime property value. 
     * @param value Value to set for the sentDateTime property.
     */
    public set sentDateTime(value: Date | undefined) {
        this._sentDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Attachment>("attachments", this.attachments);
        writer.writeCollectionOfObjectValues<Recipient>("bccRecipients", this.bccRecipients);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", this.ccRecipients);
        writer.writeStringValue("conversationId", this.conversationId);
        writer.writeStringValue("conversationIndex", this.conversationIndex);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeObjectValue<FollowupFlag>("flag", this.flag);
        writer.writeObjectValue<Recipient>("from", this.from);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeEnumValue<InferenceClassificationType>("inferenceClassification", this.inferenceClassification);
        writer.writeCollectionOfObjectValues<InternetMessageHeader>("internetMessageHeaders", this.internetMessageHeaders);
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        writer.writeBooleanValue("isDeliveryReceiptRequested", this.isDeliveryReceiptRequested);
        writer.writeBooleanValue("isDraft", this.isDraft);
        writer.writeBooleanValue("isRead", this.isRead);
        writer.writeBooleanValue("isReadReceiptRequested", this.isReadReceiptRequested);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        writer.writeCollectionOfObjectValues<Recipient>("replyTo", this.replyTo);
        writer.writeObjectValue<Recipient>("sender", this.sender);
        writer.writeDateValue("sentDateTime", this.sentDateTime);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", this.toRecipients);
        writer.writeObjectValue<ItemBody>("uniqueBody", this.uniqueBody);
        writer.writeStringValue("webLink", this.webLink);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Gets the subject property value. 
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. 
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the toRecipients property value. 
     * @returns a recipient
     */
    public get toRecipients() {
        return this._toRecipients;
    };
    /**
     * Sets the toRecipients property value. 
     * @param value Value to set for the toRecipients property.
     */
    public set toRecipients(value: Recipient[] | undefined) {
        this._toRecipients = value;
    };
    /**
     * Gets the uniqueBody property value. 
     * @returns a itemBody
     */
    public get uniqueBody() {
        return this._uniqueBody;
    };
    /**
     * Sets the uniqueBody property value. 
     * @param value Value to set for the uniqueBody property.
     */
    public set uniqueBody(value: ItemBody | undefined) {
        this._uniqueBody = value;
    };
    /**
     * Gets the webLink property value. 
     * @returns a string
     */
    public get webLink() {
        return this._webLink;
    };
    /**
     * Sets the webLink property value. 
     * @param value Value to set for the webLink property.
     */
    public set webLink(value: string | undefined) {
        this._webLink = value;
    };
}
