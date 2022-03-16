import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {Attachment, Extension, ItemBody, MultiValueLegacyExtendedProperty, OutlookItem, Recipient, SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Post extends OutlookItem implements Parsable {
    /** Read-only. Nullable. Supports $expand.  */
    private _attachments?: Attachment[] | undefined;
    /** The contents of the post. This is a default property. This property can be null.  */
    private _body?: ItemBody | undefined;
    /** Unique ID of the conversation. Read-only.  */
    private _conversationId?: string | undefined;
    /** Unique ID of the conversation thread. Read-only.  */
    private _conversationThreadId?: string | undefined;
    /** The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.  */
    private _extensions?: Extension[] | undefined;
    private _from?: Recipient | undefined;
    /** Indicates whether the post has at least one attachment. This is a default property.  */
    private _hasAttachments?: boolean | undefined;
    /** Read-only. Supports $expand.  */
    private _inReplyTo?: Post | undefined;
    /** The collection of multi-value extended properties defined for the post. Read-only. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** Conversation participants that were added to the thread as part of this post.  */
    private _newParticipants?: Recipient[] | undefined;
    /** Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _receivedDateTime?: Date | undefined;
    /** Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.  */
    private _sender?: Recipient | undefined;
    /** The collection of single-value extended properties defined for the post. Read-only. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the attachments property value. Read-only. Nullable. Supports $expand.
     * @returns a attachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: Attachment[] | undefined) {
        this._attachments = value;
    };
    /**
     * Gets the body property value. The contents of the post. This is a default property. This property can be null.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The contents of the post. This is a default property. This property can be null.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Instantiates a new post and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationId property value. Unique ID of the conversation. Read-only.
     * @returns a string
     */
    public get conversationId() {
        return this._conversationId;
    };
    /**
     * Sets the conversationId property value. Unique ID of the conversation. Read-only.
     * @param value Value to set for the conversationId property.
     */
    public set conversationId(value: string | undefined) {
        this._conversationId = value;
    };
    /**
     * Gets the conversationThreadId property value. Unique ID of the conversation thread. Read-only.
     * @returns a string
     */
    public get conversationThreadId() {
        return this._conversationThreadId;
    };
    /**
     * Sets the conversationThreadId property value. Unique ID of the conversation thread. Read-only.
     * @param value Value to set for the conversationThreadId property.
     */
    public set conversationThreadId(value: string | undefined) {
        this._conversationThreadId = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
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
            ["attachments", (o, n) => { (o as unknown as Post).attachments = n.getCollectionOfObjectValues<Attachment>(createAttachmentFromDiscriminatorValue); }],
            ["body", (o, n) => { (o as unknown as Post).body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); }],
            ["conversationId", (o, n) => { (o as unknown as Post).conversationId = n.getStringValue(); }],
            ["conversationThreadId", (o, n) => { (o as unknown as Post).conversationThreadId = n.getStringValue(); }],
            ["extensions", (o, n) => { (o as unknown as Post).extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); }],
            ["from", (o, n) => { (o as unknown as Post).from = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["hasAttachments", (o, n) => { (o as unknown as Post).hasAttachments = n.getBooleanValue(); }],
            ["inReplyTo", (o, n) => { (o as unknown as Post).inReplyTo = n.getObjectValue<Post>(createPostFromDiscriminatorValue); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as Post).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); }],
            ["newParticipants", (o, n) => { (o as unknown as Post).newParticipants = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["receivedDateTime", (o, n) => { (o as unknown as Post).receivedDateTime = n.getDateValue(); }],
            ["sender", (o, n) => { (o as unknown as Post).sender = n.getObjectValue<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as Post).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the hasAttachments property value. Indicates whether the post has at least one attachment. This is a default property.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether the post has at least one attachment. This is a default property.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the inReplyTo property value. Read-only. Supports $expand.
     * @returns a post
     */
    public get inReplyTo() {
        return this._inReplyTo;
    };
    /**
     * Sets the inReplyTo property value. Read-only. Supports $expand.
     * @param value Value to set for the inReplyTo property.
     */
    public set inReplyTo(value: Post | undefined) {
        this._inReplyTo = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the post. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the post. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the newParticipants property value. Conversation participants that were added to the thread as part of this post.
     * @returns a recipient
     */
    public get newParticipants() {
        return this._newParticipants;
    };
    /**
     * Sets the newParticipants property value. Conversation participants that were added to the thread as part of this post.
     * @param value Value to set for the newParticipants property.
     */
    public set newParticipants(value: Recipient[] | undefined) {
        this._newParticipants = value;
    };
    /**
     * Gets the receivedDateTime property value. Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get receivedDateTime() {
        return this._receivedDateTime;
    };
    /**
     * Sets the receivedDateTime property value. Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the receivedDateTime property.
     */
    public set receivedDateTime(value: Date | undefined) {
        this._receivedDateTime = value;
    };
    /**
     * Gets the sender property value. Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
     * @returns a recipient
     */
    public get sender() {
        return this._sender;
    };
    /**
     * Sets the sender property value. Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
     * @param value Value to set for the sender property.
     */
    public set sender(value: Recipient | undefined) {
        this._sender = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Attachment>("attachments", this.attachments);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeStringValue("conversationId", this.conversationId);
        writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeObjectValue<Recipient>("from", this.from);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeObjectValue<Post>("inReplyTo", this.inReplyTo);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeCollectionOfObjectValues<Recipient>("newParticipants", this.newParticipants);
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        writer.writeObjectValue<Recipient>("sender", this.sender);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the post. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the post. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
}
