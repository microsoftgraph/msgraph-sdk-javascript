import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {ConversationThread, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Conversation extends Entity implements Parsable {
    /** Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search.  */
    private _hasAttachments?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _lastDeliveredDateTime?: Date | undefined;
    /** A short summary from the body of the latest post in this conversation. Supports $filter (eq, ne, le, ge).  */
    private _preview?: string | undefined;
    /** A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.  */
    private _threads?: ConversationThread[] | undefined;
    /** The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.  */
    private _topic?: string | undefined;
    /** All the users that sent a message to this Conversation.  */
    private _uniqueSenders?: string[] | undefined;
    /**
     * Instantiates a new conversation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["hasAttachments", (o, n) => { (o as unknown as Conversation).hasAttachments = n.getBooleanValue(); }],
            ["lastDeliveredDateTime", (o, n) => { (o as unknown as Conversation).lastDeliveredDateTime = n.getDateValue(); }],
            ["preview", (o, n) => { (o as unknown as Conversation).preview = n.getStringValue(); }],
            ["threads", (o, n) => { (o as unknown as Conversation).threads = n.getCollectionOfObjectValues<ConversationThread>(createConversationThreadFromDiscriminatorValue); }],
            ["topic", (o, n) => { (o as unknown as Conversation).topic = n.getStringValue(); }],
            ["uniqueSenders", (o, n) => { (o as unknown as Conversation).uniqueSenders = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the hasAttachments property value. Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search.
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. Indicates whether any of the posts within this Conversation has at least one attachment. Supports $filter (eq, ne) and $search.
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastDeliveredDateTime() {
        return this._lastDeliveredDateTime;
    };
    /**
     * Sets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastDeliveredDateTime property.
     */
    public set lastDeliveredDateTime(value: Date | undefined) {
        this._lastDeliveredDateTime = value;
    };
    /**
     * Gets the preview property value. A short summary from the body of the latest post in this conversation. Supports $filter (eq, ne, le, ge).
     * @returns a string
     */
    public get preview() {
        return this._preview;
    };
    /**
     * Sets the preview property value. A short summary from the body of the latest post in this conversation. Supports $filter (eq, ne, le, ge).
     * @param value Value to set for the preview property.
     */
    public set preview(value: string | undefined) {
        this._preview = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeDateValue("lastDeliveredDateTime", this.lastDeliveredDateTime);
        writer.writeStringValue("preview", this.preview);
        writer.writeCollectionOfObjectValues<ConversationThread>("threads", this.threads);
        writer.writeStringValue("topic", this.topic);
        writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", this.uniqueSenders);
    };
    /**
     * Gets the threads property value. A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
     * @returns a conversationThread
     */
    public get threads() {
        return this._threads;
    };
    /**
     * Sets the threads property value. A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
     * @param value Value to set for the threads property.
     */
    public set threads(value: ConversationThread[] | undefined) {
        this._threads = value;
    };
    /**
     * Gets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        this._topic = value;
    };
    /**
     * Gets the uniqueSenders property value. All the users that sent a message to this Conversation.
     * @returns a string
     */
    public get uniqueSenders() {
        return this._uniqueSenders;
    };
    /**
     * Sets the uniqueSenders property value. All the users that sent a message to this Conversation.
     * @param value Value to set for the uniqueSenders property.
     */
    public set uniqueSenders(value: string[] | undefined) {
        this._uniqueSenders = value;
    };
}
