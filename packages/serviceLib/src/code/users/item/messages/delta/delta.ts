import {Attachment} from '../../../../models/microsoft/graph/attachment';
import {Extension} from '../../../../models/microsoft/graph/extension';
import {FollowupFlag} from '../../../../models/microsoft/graph/followupFlag';
import {Importance} from '../../../../models/microsoft/graph/importance';
import {InferenceClassificationType} from '../../../../models/microsoft/graph/inferenceClassificationType';
import {InternetMessageHeader} from '../../../../models/microsoft/graph/internetMessageHeader';
import {ItemBody} from '../../../../models/microsoft/graph/itemBody';
import {MultiValueLegacyExtendedProperty} from '../../../../models/microsoft/graph/multiValueLegacyExtendedProperty';
import {OutlookItem} from '../../../../models/microsoft/graph/outlookItem';
import {Recipient} from '../../../../models/microsoft/graph/recipient';
import {SingleValueLegacyExtendedProperty} from '../../../../models/microsoft/graph/singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Delta extends OutlookItem implements Parsable {
    /** The fileAttachment and itemAttachment attachments for the message.  */
    private _attachments?: Attachment[] | undefined;
    /** The Bcc: recipients for the message.  */
    private _bccRecipients?: Recipient[] | undefined;
    /** The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.  */
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
    /** The flag value that indicates the status, start date, due date, or completion date for the message.  */
    private _flag?: FollowupFlag | undefined;
    /** The owner of the mailbox from which the message is sent. In most cases, this value is the same as the sender property, except for sharing or delegation scenarios. The value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.  */
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
     * Instantiates a new delta and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @returns a attachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Gets the bccRecipients property value. The Bcc: recipients for the message.
     * @returns a recipient
     */
    public get bccRecipients() {
        return this._bccRecipients;
    };
    /**
     * Gets the body property value. The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Gets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @returns a string
     */
    public get bodyPreview() {
        return this._bodyPreview;
    };
    /**
     * Gets the ccRecipients property value. The Cc: recipients for the message.
     * @returns a recipient
     */
    public get ccRecipients() {
        return this._ccRecipients;
    };
    /**
     * Gets the conversationId property value. The ID of the conversation the email belongs to.
     * @returns a string
     */
    public get conversationId() {
        return this._conversationId;
    };
    /**
     * Gets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @returns a binary
     */
    public get conversationIndex() {
        return this._conversationIndex;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the flag property value. The flag value that indicates the status, start date, due date, or completion date for the message.
     * @returns a followupFlag
     */
    public get flag() {
        return this._flag;
    };
    /**
     * Gets the from property value. The owner of the mailbox from which the message is sent. In most cases, this value is the same as the sender property, except for sharing or delegation scenarios. The value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.
     * @returns a recipient
     */
    public get from() {
        return this._from;
    };
    /**
     * Gets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Gets the importance property value. 
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Gets the inferenceClassification property value. 
     * @returns a inferenceClassificationType
     */
    public get inferenceClassification() {
        return this._inferenceClassification;
    };
    /**
     * Gets the internetMessageHeaders property value. 
     * @returns a internetMessageHeader
     */
    public get internetMessageHeaders() {
        return this._internetMessageHeaders;
    };
    /**
     * Gets the internetMessageId property value. 
     * @returns a string
     */
    public get internetMessageId() {
        return this._internetMessageId;
    };
    /**
     * Gets the isDeliveryReceiptRequested property value. 
     * @returns a boolean
     */
    public get isDeliveryReceiptRequested() {
        return this._isDeliveryReceiptRequested;
    };
    /**
     * Gets the isDraft property value. 
     * @returns a boolean
     */
    public get isDraft() {
        return this._isDraft;
    };
    /**
     * Gets the isRead property value. 
     * @returns a boolean
     */
    public get isRead() {
        return this._isRead;
    };
    /**
     * Gets the isReadReceiptRequested property value. 
     * @returns a boolean
     */
    public get isReadReceiptRequested() {
        return this._isReadReceiptRequested;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Gets the parentFolderId property value. 
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Gets the receivedDateTime property value. 
     * @returns a Date
     */
    public get receivedDateTime() {
        return this._receivedDateTime;
    };
    /**
     * Gets the replyTo property value. 
     * @returns a recipient
     */
    public get replyTo() {
        return this._replyTo;
    };
    /**
     * Gets the sender property value. 
     * @returns a recipient
     */
    public get sender() {
        return this._sender;
    };
    /**
     * Gets the sentDateTime property value. 
     * @returns a Date
     */
    public get sentDateTime() {
        return this._sentDateTime;
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Gets the subject property value. 
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Gets the toRecipients property value. 
     * @returns a recipient
     */
    public get toRecipients() {
        return this._toRecipients;
    };
    /**
     * Gets the uniqueBody property value. 
     * @returns a itemBody
     */
    public get uniqueBody() {
        return this._uniqueBody;
    };
    /**
     * Gets the webLink property value. 
     * @returns a string
     */
    public get webLink() {
        return this._webLink;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["attachments", (o, n) => { (o as unknown as Delta).attachments = n.getCollectionOfObjectValues<Attachment>(Attachment); }],
            ["bccRecipients", (o, n) => { (o as unknown as Delta).bccRecipients = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["body", (o, n) => { (o as unknown as Delta).body = n.getObjectValue<ItemBody>(ItemBody); }],
            ["bodyPreview", (o, n) => { (o as unknown as Delta).bodyPreview = n.getStringValue(); }],
            ["ccRecipients", (o, n) => { (o as unknown as Delta).ccRecipients = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["conversationId", (o, n) => { (o as unknown as Delta).conversationId = n.getStringValue(); }],
            ["conversationIndex", (o, n) => { (o as unknown as Delta).conversationIndex = n.getStringValue(); }],
            ["extensions", (o, n) => { (o as unknown as Delta).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["flag", (o, n) => { (o as unknown as Delta).flag = n.getObjectValue<FollowupFlag>(FollowupFlag); }],
            ["from", (o, n) => { (o as unknown as Delta).from = n.getObjectValue<Recipient>(Recipient); }],
            ["hasAttachments", (o, n) => { (o as unknown as Delta).hasAttachments = n.getBooleanValue(); }],
            ["importance", (o, n) => { (o as unknown as Delta).importance = n.getEnumValue<Importance>(Importance); }],
            ["inferenceClassification", (o, n) => { (o as unknown as Delta).inferenceClassification = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType); }],
            ["internetMessageHeaders", (o, n) => { (o as unknown as Delta).internetMessageHeaders = n.getCollectionOfObjectValues<InternetMessageHeader>(InternetMessageHeader); }],
            ["internetMessageId", (o, n) => { (o as unknown as Delta).internetMessageId = n.getStringValue(); }],
            ["isDeliveryReceiptRequested", (o, n) => { (o as unknown as Delta).isDeliveryReceiptRequested = n.getBooleanValue(); }],
            ["isDraft", (o, n) => { (o as unknown as Delta).isDraft = n.getBooleanValue(); }],
            ["isRead", (o, n) => { (o as unknown as Delta).isRead = n.getBooleanValue(); }],
            ["isReadReceiptRequested", (o, n) => { (o as unknown as Delta).isReadReceiptRequested = n.getBooleanValue(); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as Delta).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", (o, n) => { (o as unknown as Delta).parentFolderId = n.getStringValue(); }],
            ["receivedDateTime", (o, n) => { (o as unknown as Delta).receivedDateTime = n.getDateValue(); }],
            ["replyTo", (o, n) => { (o as unknown as Delta).replyTo = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["sender", (o, n) => { (o as unknown as Delta).sender = n.getObjectValue<Recipient>(Recipient); }],
            ["sentDateTime", (o, n) => { (o as unknown as Delta).sentDateTime = n.getDateValue(); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as Delta).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(SingleValueLegacyExtendedProperty); }],
            ["subject", (o, n) => { (o as unknown as Delta).subject = n.getStringValue(); }],
            ["toRecipients", (o, n) => { (o as unknown as Delta).toRecipients = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["uniqueBody", (o, n) => { (o as unknown as Delta).uniqueBody = n.getObjectValue<ItemBody>(ItemBody); }],
            ["webLink", (o, n) => { (o as unknown as Delta).webLink = n.getStringValue(); }],
        ]);
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
     * Sets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Sets the bccRecipients property value. The Bcc: recipients for the message.
     * @param value Value to set for the bccRecipients property.
     */
    public set bccRecipients(value: Recipient[] | undefined) {
        this._bccRecipients = value;
    };
    /**
     * Sets the body property value. The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Sets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @param value Value to set for the bodyPreview property.
     */
    public set bodyPreview(value: string | undefined) {
        this._bodyPreview = value;
    };
    /**
     * Sets the ccRecipients property value. The Cc: recipients for the message.
     * @param value Value to set for the ccRecipients property.
     */
    public set ccRecipients(value: Recipient[] | undefined) {
        this._ccRecipients = value;
    };
    /**
     * Sets the conversationId property value. The ID of the conversation the email belongs to.
     * @param value Value to set for the conversationId property.
     */
    public set conversationId(value: string | undefined) {
        this._conversationId = value;
    };
    /**
     * Sets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @param value Value to set for the conversationIndex property.
     */
    public set conversationIndex(value: string | undefined) {
        this._conversationIndex = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the flag property value. The flag value that indicates the status, start date, due date, or completion date for the message.
     * @param value Value to set for the flag property.
     */
    public set flag(value: FollowupFlag | undefined) {
        this._flag = value;
    };
    /**
     * Sets the from property value. The owner of the mailbox from which the message is sent. In most cases, this value is the same as the sender property, except for sharing or delegation scenarios. The value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.
     * @param value Value to set for the from property.
     */
    public set from(value: Recipient | undefined) {
        this._from = value;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Sets the importance property value. 
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Sets the inferenceClassification property value. 
     * @param value Value to set for the inferenceClassification property.
     */
    public set inferenceClassification(value: InferenceClassificationType | undefined) {
        this._inferenceClassification = value;
    };
    /**
     * Sets the internetMessageHeaders property value. 
     * @param value Value to set for the internetMessageHeaders property.
     */
    public set internetMessageHeaders(value: InternetMessageHeader[] | undefined) {
        this._internetMessageHeaders = value;
    };
    /**
     * Sets the internetMessageId property value. 
     * @param value Value to set for the internetMessageId property.
     */
    public set internetMessageId(value: string | undefined) {
        this._internetMessageId = value;
    };
    /**
     * Sets the isDeliveryReceiptRequested property value. 
     * @param value Value to set for the isDeliveryReceiptRequested property.
     */
    public set isDeliveryReceiptRequested(value: boolean | undefined) {
        this._isDeliveryReceiptRequested = value;
    };
    /**
     * Sets the isDraft property value. 
     * @param value Value to set for the isDraft property.
     */
    public set isDraft(value: boolean | undefined) {
        this._isDraft = value;
    };
    /**
     * Sets the isRead property value. 
     * @param value Value to set for the isRead property.
     */
    public set isRead(value: boolean | undefined) {
        this._isRead = value;
    };
    /**
     * Sets the isReadReceiptRequested property value. 
     * @param value Value to set for the isReadReceiptRequested property.
     */
    public set isReadReceiptRequested(value: boolean | undefined) {
        this._isReadReceiptRequested = value;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Sets the parentFolderId property value. 
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Sets the receivedDateTime property value. 
     * @param value Value to set for the receivedDateTime property.
     */
    public set receivedDateTime(value: Date | undefined) {
        this._receivedDateTime = value;
    };
    /**
     * Sets the replyTo property value. 
     * @param value Value to set for the replyTo property.
     */
    public set replyTo(value: Recipient[] | undefined) {
        this._replyTo = value;
    };
    /**
     * Sets the sender property value. 
     * @param value Value to set for the sender property.
     */
    public set sender(value: Recipient | undefined) {
        this._sender = value;
    };
    /**
     * Sets the sentDateTime property value. 
     * @param value Value to set for the sentDateTime property.
     */
    public set sentDateTime(value: Date | undefined) {
        this._sentDateTime = value;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Sets the subject property value. 
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Sets the toRecipients property value. 
     * @param value Value to set for the toRecipients property.
     */
    public set toRecipients(value: Recipient[] | undefined) {
        this._toRecipients = value;
    };
    /**
     * Sets the uniqueBody property value. 
     * @param value Value to set for the uniqueBody property.
     */
    public set uniqueBody(value: ItemBody | undefined) {
        this._uniqueBody = value;
    };
    /**
     * Sets the webLink property value. 
     * @param value Value to set for the webLink property.
     */
    public set webLink(value: string | undefined) {
        this._webLink = value;
    };
}
