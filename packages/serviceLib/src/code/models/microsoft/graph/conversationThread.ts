import {Entity, Post, Recipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationThread extends Entity implements Parsable {
    /** The Cc: recipients for the thread. Returned only on $select.  */
    private _ccRecipients?: Recipient[] | undefined;
    /** Indicates whether any of the posts within this thread has at least one attachment. Returned by default.  */
    private _hasAttachments?: boolean | undefined;
    /** Indicates if the thread is locked. Returned by default.  */
    private _isLocked?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.Returned by default.  */
    private _lastDeliveredDateTime?: Date | undefined;
    /** Read-only. Nullable.  */
    private _posts?: Post[] | undefined;
    /** A short summary from the body of the latest post in this conversation. Returned by default.  */
    private _preview?: string | undefined;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default.  */
    private _topic?: string | undefined;
    /** The To: recipients for the thread. Returned only on $select.  */
    private _toRecipients?: Recipient[] | undefined;
    /** All the users that sent a message to this thread. Returned by default.  */
    private _uniqueSenders?: string[] | undefined;
    /**
     * Instantiates a new conversationThread and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the ccRecipients property value. The Cc: recipients for the thread. Returned only on $select.
     * @returns a recipient
     */
    public get ccRecipients() {
        return this._ccRecipients;
    };
    /**
     * Gets the hasAttachments property value. Indicates whether any of the posts within this thread has at least one attachment. Returned by default.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Gets the isLocked property value. Indicates if the thread is locked. Returned by default.
     * @returns a boolean
     */
    public get isLocked() {
        return this._isLocked;
    };
    /**
     * Gets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.Returned by default.
     * @returns a Date
     */
    public get lastDeliveredDateTime() {
        return this._lastDeliveredDateTime;
    };
    /**
     * Gets the posts property value. Read-only. Nullable.
     * @returns a post
     */
    public get posts() {
        return this._posts;
    };
    /**
     * Gets the preview property value. A short summary from the body of the latest post in this conversation. Returned by default.
     * @returns a string
     */
    public get preview() {
        return this._preview;
    };
    /**
     * Gets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Gets the toRecipients property value. The To: recipients for the thread. Returned only on $select.
     * @returns a recipient
     */
    public get toRecipients() {
        return this._toRecipients;
    };
    /**
     * Gets the uniqueSenders property value. All the users that sent a message to this thread. Returned by default.
     * @returns a string
     */
    public get uniqueSenders() {
        return this._uniqueSenders;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["ccRecipients", (o, n) => { (o as unknown as ConversationThread).ccRecipients = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["hasAttachments", (o, n) => { (o as unknown as ConversationThread).hasAttachments = n.getBooleanValue(); }],
            ["isLocked", (o, n) => { (o as unknown as ConversationThread).isLocked = n.getBooleanValue(); }],
            ["lastDeliveredDateTime", (o, n) => { (o as unknown as ConversationThread).lastDeliveredDateTime = n.getDateValue(); }],
            ["posts", (o, n) => { (o as unknown as ConversationThread).posts = n.getCollectionOfObjectValues<Post>(Post); }],
            ["preview", (o, n) => { (o as unknown as ConversationThread).preview = n.getStringValue(); }],
            ["topic", (o, n) => { (o as unknown as ConversationThread).topic = n.getStringValue(); }],
            ["toRecipients", (o, n) => { (o as unknown as ConversationThread).toRecipients = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
            ["uniqueSenders", (o, n) => { (o as unknown as ConversationThread).uniqueSenders = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", this.ccRecipients);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("isLocked", this.isLocked);
        writer.writeDateValue("lastDeliveredDateTime", this.lastDeliveredDateTime);
        writer.writeCollectionOfObjectValues<Post>("posts", this.posts);
        writer.writeStringValue("preview", this.preview);
        writer.writeStringValue("topic", this.topic);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", this.toRecipients);
        writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", this.uniqueSenders);
    };
    /**
     * Sets the ccRecipients property value. The Cc: recipients for the thread. Returned only on $select.
     * @param value Value to set for the ccRecipients property.
     */
    public set ccRecipients(value: Recipient[] | undefined) {
        this._ccRecipients = value;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether any of the posts within this thread has at least one attachment. Returned by default.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Sets the isLocked property value. Indicates if the thread is locked. Returned by default.
     * @param value Value to set for the isLocked property.
     */
    public set isLocked(value: boolean | undefined) {
        this._isLocked = value;
    };
    /**
     * Sets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.Returned by default.
     * @param value Value to set for the lastDeliveredDateTime property.
     */
    public set lastDeliveredDateTime(value: Date | undefined) {
        this._lastDeliveredDateTime = value;
    };
    /**
     * Sets the posts property value. Read-only. Nullable.
     * @param value Value to set for the posts property.
     */
    public set posts(value: Post[] | undefined) {
        this._posts = value;
    };
    /**
     * Sets the preview property value. A short summary from the body of the latest post in this conversation. Returned by default.
     * @param value Value to set for the preview property.
     */
    public set preview(value: string | undefined) {
        this._preview = value;
    };
    /**
     * Sets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated. Returned by default.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        this._topic = value;
    };
    /**
     * Sets the toRecipients property value. The To: recipients for the thread. Returned only on $select.
     * @param value Value to set for the toRecipients property.
     */
    public set toRecipients(value: Recipient[] | undefined) {
        this._toRecipients = value;
    };
    /**
     * Sets the uniqueSenders property value. All the users that sent a message to this thread. Returned by default.
     * @param value Value to set for the uniqueSenders property.
     */
    public set uniqueSenders(value: string[] | undefined) {
        this._uniqueSenders = value;
    };
}
