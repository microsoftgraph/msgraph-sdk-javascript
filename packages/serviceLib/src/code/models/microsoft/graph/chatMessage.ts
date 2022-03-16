import {ChatMessageImportance} from './chatMessageImportance';
import {ChatMessageType} from './chatMessageType';
import {createChannelIdentityFromDiscriminatorValue} from './createChannelIdentityFromDiscriminatorValue';
import {createChatMessageAttachmentFromDiscriminatorValue} from './createChatMessageAttachmentFromDiscriminatorValue';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createChatMessageFromIdentitySetFromDiscriminatorValue} from './createChatMessageFromIdentitySetFromDiscriminatorValue';
import {createChatMessageHostedContentFromDiscriminatorValue} from './createChatMessageHostedContentFromDiscriminatorValue';
import {createChatMessageMentionFromDiscriminatorValue} from './createChatMessageMentionFromDiscriminatorValue';
import {createChatMessagePolicyViolationFromDiscriminatorValue} from './createChatMessagePolicyViolationFromDiscriminatorValue';
import {createChatMessageReactionFromDiscriminatorValue} from './createChatMessageReactionFromDiscriminatorValue';
import {createEventMessageDetailFromDiscriminatorValue} from './createEventMessageDetailFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ChannelIdentity, ChatMessageAttachment, ChatMessageFromIdentitySet, ChatMessageHostedContent, ChatMessageMention, ChatMessagePolicyViolation, ChatMessageReaction, Entity, EventMessageDetail, ItemBody} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessage extends Entity implements Parsable {
    /** References to attached objects like files, tabs, meetings etc.  */
    private _attachments?: ChatMessageAttachment[] | undefined;
    private _body?: ItemBody | undefined;
    /** If the message was sent in a channel, represents identity of the channel.  */
    private _channelIdentity?: ChannelIdentity | undefined;
    /** If the message was sent in a chat, represents the identity of the chat.  */
    private _chatId?: string | undefined;
    /** Timestamp of when the chat message was created.  */
    private _createdDateTime?: Date | undefined;
    /** Read only. Timestamp at which the chat message was deleted, or null if not deleted.  */
    private _deletedDateTime?: Date | undefined;
    /** Read-only. Version number of the chat message.  */
    private _etag?: string | undefined;
    /** Read-only. If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.  */
    private _eventDetail?: EventMessageDetail | undefined;
    /** Details of the sender of the chat message. Can only be set during migration.  */
    private _from?: ChatMessageFromIdentitySet | undefined;
    /** Content in a message hosted by Microsoft Teams - for example, images or code snippets.  */
    private _hostedContents?: ChatMessageHostedContent[] | undefined;
    /** The importance of the chat message. The possible values are: normal, high, urgent.  */
    private _importance?: ChatMessageImportance | undefined;
    /** Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.  */
    private _lastEditedDateTime?: Date | undefined;
    /** Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Locale of the chat message set by the client. Always set to en-us.  */
    private _locale?: string | undefined;
    /** List of entities mentioned in the chat message. Supported entities are: user, bot, team, and channel.  */
    private _mentions?: ChatMessageMention[] | undefined;
    /** The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage.  */
    private _messageType?: ChatMessageType | undefined;
    /** Defines the properties of a policy violation set by a data loss prevention (DLP) application.  */
    private _policyViolation?: ChatMessagePolicyViolation | undefined;
    /** Reactions for this chat message (for example, Like).  */
    private _reactions?: ChatMessageReaction[] | undefined;
    /** Replies for a specified message.  */
    private _replies?: ChatMessage[] | undefined;
    /** Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)  */
    private _replyToId?: string | undefined;
    /** The subject of the chat message, in plaintext.  */
    private _subject?: string | undefined;
    /** Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.  */
    private _summary?: string | undefined;
    /** Read-only. Link to the message in Microsoft Teams.  */
    private _webUrl?: string | undefined;
    /**
     * Gets the attachments property value. References to attached objects like files, tabs, meetings etc.
     * @returns a chatMessageAttachment
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. References to attached objects like files, tabs, meetings etc.
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: ChatMessageAttachment[] | undefined) {
        this._attachments = value;
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
     * Gets the channelIdentity property value. If the message was sent in a channel, represents identity of the channel.
     * @returns a channelIdentity
     */
    public get channelIdentity() {
        return this._channelIdentity;
    };
    /**
     * Sets the channelIdentity property value. If the message was sent in a channel, represents identity of the channel.
     * @param value Value to set for the channelIdentity property.
     */
    public set channelIdentity(value: ChannelIdentity | undefined) {
        this._channelIdentity = value;
    };
    /**
     * Gets the chatId property value. If the message was sent in a chat, represents the identity of the chat.
     * @returns a string
     */
    public get chatId() {
        return this._chatId;
    };
    /**
     * Sets the chatId property value. If the message was sent in a chat, represents the identity of the chat.
     * @param value Value to set for the chatId property.
     */
    public set chatId(value: string | undefined) {
        this._chatId = value;
    };
    /**
     * Instantiates a new chatMessage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Timestamp of when the chat message was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp of when the chat message was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deletedDateTime property value. Read only. Timestamp at which the chat message was deleted, or null if not deleted.
     * @returns a Date
     */
    public get deletedDateTime() {
        return this._deletedDateTime;
    };
    /**
     * Sets the deletedDateTime property value. Read only. Timestamp at which the chat message was deleted, or null if not deleted.
     * @param value Value to set for the deletedDateTime property.
     */
    public set deletedDateTime(value: Date | undefined) {
        this._deletedDateTime = value;
    };
    /**
     * Gets the etag property value. Read-only. Version number of the chat message.
     * @returns a string
     */
    public get etag() {
        return this._etag;
    };
    /**
     * Sets the etag property value. Read-only. Version number of the chat message.
     * @param value Value to set for the etag property.
     */
    public set etag(value: string | undefined) {
        this._etag = value;
    };
    /**
     * Gets the eventDetail property value. Read-only. If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.
     * @returns a eventMessageDetail
     */
    public get eventDetail() {
        return this._eventDetail;
    };
    /**
     * Sets the eventDetail property value. Read-only. If present, represents details of an event that happened in a chat, a channel, or a team, for example, adding new members. For event messages, the messageType property will be set to systemEventMessage.
     * @param value Value to set for the eventDetail property.
     */
    public set eventDetail(value: EventMessageDetail | undefined) {
        this._eventDetail = value;
    };
    /**
     * Gets the from property value. Details of the sender of the chat message. Can only be set during migration.
     * @returns a chatMessageFromIdentitySet
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. Details of the sender of the chat message. Can only be set during migration.
     * @param value Value to set for the from property.
     */
    public set from(value: ChatMessageFromIdentitySet | undefined) {
        this._from = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["attachments", (o, n) => { (o as unknown as ChatMessage).attachments = n.getCollectionOfObjectValues<ChatMessageAttachment>(createChatMessageAttachmentFromDiscriminatorValue); }],
            ["body", (o, n) => { (o as unknown as ChatMessage).body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); }],
            ["channelIdentity", (o, n) => { (o as unknown as ChatMessage).channelIdentity = n.getObjectValue<ChannelIdentity>(createChannelIdentityFromDiscriminatorValue); }],
            ["chatId", (o, n) => { (o as unknown as ChatMessage).chatId = n.getStringValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as ChatMessage).createdDateTime = n.getDateValue(); }],
            ["deletedDateTime", (o, n) => { (o as unknown as ChatMessage).deletedDateTime = n.getDateValue(); }],
            ["etag", (o, n) => { (o as unknown as ChatMessage).etag = n.getStringValue(); }],
            ["eventDetail", (o, n) => { (o as unknown as ChatMessage).eventDetail = n.getObjectValue<EventMessageDetail>(createEventMessageDetailFromDiscriminatorValue); }],
            ["from", (o, n) => { (o as unknown as ChatMessage).from = n.getObjectValue<ChatMessageFromIdentitySet>(createChatMessageFromIdentitySetFromDiscriminatorValue); }],
            ["hostedContents", (o, n) => { (o as unknown as ChatMessage).hostedContents = n.getCollectionOfObjectValues<ChatMessageHostedContent>(createChatMessageHostedContentFromDiscriminatorValue); }],
            ["importance", (o, n) => { (o as unknown as ChatMessage).importance = n.getEnumValue<ChatMessageImportance>(ChatMessageImportance); }],
            ["lastEditedDateTime", (o, n) => { (o as unknown as ChatMessage).lastEditedDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ChatMessage).lastModifiedDateTime = n.getDateValue(); }],
            ["locale", (o, n) => { (o as unknown as ChatMessage).locale = n.getStringValue(); }],
            ["mentions", (o, n) => { (o as unknown as ChatMessage).mentions = n.getCollectionOfObjectValues<ChatMessageMention>(createChatMessageMentionFromDiscriminatorValue); }],
            ["messageType", (o, n) => { (o as unknown as ChatMessage).messageType = n.getEnumValue<ChatMessageType>(ChatMessageType); }],
            ["policyViolation", (o, n) => { (o as unknown as ChatMessage).policyViolation = n.getObjectValue<ChatMessagePolicyViolation>(createChatMessagePolicyViolationFromDiscriminatorValue); }],
            ["reactions", (o, n) => { (o as unknown as ChatMessage).reactions = n.getCollectionOfObjectValues<ChatMessageReaction>(createChatMessageReactionFromDiscriminatorValue); }],
            ["replies", (o, n) => { (o as unknown as ChatMessage).replies = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); }],
            ["replyToId", (o, n) => { (o as unknown as ChatMessage).replyToId = n.getStringValue(); }],
            ["subject", (o, n) => { (o as unknown as ChatMessage).subject = n.getStringValue(); }],
            ["summary", (o, n) => { (o as unknown as ChatMessage).summary = n.getStringValue(); }],
            ["webUrl", (o, n) => { (o as unknown as ChatMessage).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the hostedContents property value. Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     * @returns a chatMessageHostedContent
     */
    public get hostedContents() {
        return this._hostedContents;
    };
    /**
     * Sets the hostedContents property value. Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     * @param value Value to set for the hostedContents property.
     */
    public set hostedContents(value: ChatMessageHostedContent[] | undefined) {
        this._hostedContents = value;
    };
    /**
     * Gets the importance property value. The importance of the chat message. The possible values are: normal, high, urgent.
     * @returns a chatMessageImportance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance of the chat message. The possible values are: normal, high, urgent.
     * @param value Value to set for the importance property.
     */
    public set importance(value: ChatMessageImportance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the lastEditedDateTime property value. Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
     * @returns a Date
     */
    public get lastEditedDateTime() {
        return this._lastEditedDateTime;
    };
    /**
     * Sets the lastEditedDateTime property value. Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
     * @param value Value to set for the lastEditedDateTime property.
     */
    public set lastEditedDateTime(value: Date | undefined) {
        this._lastEditedDateTime = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the locale property value. Locale of the chat message set by the client. Always set to en-us.
     * @returns a string
     */
    public get locale() {
        return this._locale;
    };
    /**
     * Sets the locale property value. Locale of the chat message set by the client. Always set to en-us.
     * @param value Value to set for the locale property.
     */
    public set locale(value: string | undefined) {
        this._locale = value;
    };
    /**
     * Gets the mentions property value. List of entities mentioned in the chat message. Supported entities are: user, bot, team, and channel.
     * @returns a chatMessageMention
     */
    public get mentions() {
        return this._mentions;
    };
    /**
     * Sets the mentions property value. List of entities mentioned in the chat message. Supported entities are: user, bot, team, and channel.
     * @param value Value to set for the mentions property.
     */
    public set mentions(value: ChatMessageMention[] | undefined) {
        this._mentions = value;
    };
    /**
     * Gets the messageType property value. The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage.
     * @returns a chatMessageType
     */
    public get messageType() {
        return this._messageType;
    };
    /**
     * Sets the messageType property value. The type of chat message. The possible values are: message, chatEvent, typing, unknownFutureValue, systemEventMessage. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: systemEventMessage.
     * @param value Value to set for the messageType property.
     */
    public set messageType(value: ChatMessageType | undefined) {
        this._messageType = value;
    };
    /**
     * Gets the policyViolation property value. Defines the properties of a policy violation set by a data loss prevention (DLP) application.
     * @returns a chatMessagePolicyViolation
     */
    public get policyViolation() {
        return this._policyViolation;
    };
    /**
     * Sets the policyViolation property value. Defines the properties of a policy violation set by a data loss prevention (DLP) application.
     * @param value Value to set for the policyViolation property.
     */
    public set policyViolation(value: ChatMessagePolicyViolation | undefined) {
        this._policyViolation = value;
    };
    /**
     * Gets the reactions property value. Reactions for this chat message (for example, Like).
     * @returns a chatMessageReaction
     */
    public get reactions() {
        return this._reactions;
    };
    /**
     * Sets the reactions property value. Reactions for this chat message (for example, Like).
     * @param value Value to set for the reactions property.
     */
    public set reactions(value: ChatMessageReaction[] | undefined) {
        this._reactions = value;
    };
    /**
     * Gets the replies property value. Replies for a specified message.
     * @returns a chatMessage
     */
    public get replies() {
        return this._replies;
    };
    /**
     * Sets the replies property value. Replies for a specified message.
     * @param value Value to set for the replies property.
     */
    public set replies(value: ChatMessage[] | undefined) {
        this._replies = value;
    };
    /**
     * Gets the replyToId property value. Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
     * @returns a string
     */
    public get replyToId() {
        return this._replyToId;
    };
    /**
     * Sets the replyToId property value. Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
     * @param value Value to set for the replyToId property.
     */
    public set replyToId(value: string | undefined) {
        this._replyToId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ChatMessageAttachment>("attachments", this.attachments);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeObjectValue<ChannelIdentity>("channelIdentity", this.channelIdentity);
        writer.writeStringValue("chatId", this.chatId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
        writer.writeStringValue("etag", this.etag);
        writer.writeObjectValue<EventMessageDetail>("eventDetail", this.eventDetail);
        writer.writeObjectValue<ChatMessageFromIdentitySet>("from", this.from);
        writer.writeCollectionOfObjectValues<ChatMessageHostedContent>("hostedContents", this.hostedContents);
        writer.writeEnumValue<ChatMessageImportance>("importance", this.importance);
        writer.writeDateValue("lastEditedDateTime", this.lastEditedDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("locale", this.locale);
        writer.writeCollectionOfObjectValues<ChatMessageMention>("mentions", this.mentions);
        writer.writeEnumValue<ChatMessageType>("messageType", this.messageType);
        writer.writeObjectValue<ChatMessagePolicyViolation>("policyViolation", this.policyViolation);
        writer.writeCollectionOfObjectValues<ChatMessageReaction>("reactions", this.reactions);
        writer.writeCollectionOfObjectValues<ChatMessage>("replies", this.replies);
        writer.writeStringValue("replyToId", this.replyToId);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("summary", this.summary);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the subject property value. The subject of the chat message, in plaintext.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject of the chat message, in plaintext.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the summary property value. Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
     * @returns a string
     */
    public get summary() {
        return this._summary;
    };
    /**
     * Sets the summary property value. Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
     * @param value Value to set for the summary property.
     */
    public set summary(value: string | undefined) {
        this._summary = value;
    };
    /**
     * Gets the webUrl property value. Read-only. Link to the message in Microsoft Teams.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Read-only. Link to the message in Microsoft Teams.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
