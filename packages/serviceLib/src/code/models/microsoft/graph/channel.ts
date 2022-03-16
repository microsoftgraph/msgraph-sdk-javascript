import {ChannelMembershipType} from './channelMembershipType';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {ChatMessage, ConversationMember, DriveItem, Entity, TeamsTab} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Channel extends Entity implements Parsable {
    /** Read only. Timestamp at which the channel was created.  */
    private _createdDateTime?: Date | undefined;
    /** Optional textual description for the channel.  */
    private _description?: string | undefined;
    /** Channel name as it will appear to the user in Microsoft Teams.  */
    private _displayName?: string | undefined;
    /** The email address for sending messages to the channel. Read-only.  */
    private _email?: string | undefined;
    /** Metadata for the location where the channel's files are stored.  */
    private _filesFolder?: DriveItem | undefined;
    /** Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.  */
    private _isFavoriteByDefault?: boolean | undefined;
    /** A collection of membership records associated with the channel.  */
    private _members?: ConversationMember[] | undefined;
    /** The type of the channel. Can be set during creation and can't be changed. Possible values are: standard - Channel inherits the list of members of the parent team; private - Channel can have members that are a subset of all the members on the parent team.  */
    private _membershipType?: ChannelMembershipType | undefined;
    /** A collection of all the messages in the channel. A navigation property. Nullable.  */
    private _messages?: ChatMessage[] | undefined;
    /** A collection of all the tabs in the channel. A navigation property.  */
    private _tabs?: TeamsTab[] | undefined;
    /** A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.  */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new channel and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Read only. Timestamp at which the channel was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Read only. Timestamp at which the channel was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. Optional textual description for the channel.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional textual description for the channel.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Channel name as it will appear to the user in Microsoft Teams.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Channel name as it will appear to the user in Microsoft Teams.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the email property value. The email address for sending messages to the channel. Read-only.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address for sending messages to the channel. Read-only.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * Gets the filesFolder property value. Metadata for the location where the channel's files are stored.
     * @returns a driveItem
     */
    public get filesFolder() {
        return this._filesFolder;
    };
    /**
     * Sets the filesFolder property value. Metadata for the location where the channel's files are stored.
     * @param value Value to set for the filesFolder property.
     */
    public set filesFolder(value: DriveItem | undefined) {
        this._filesFolder = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as Channel).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as Channel).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as Channel).displayName = n.getStringValue(); }],
            ["email", (o, n) => { (o as unknown as Channel).email = n.getStringValue(); }],
            ["filesFolder", (o, n) => { (o as unknown as Channel).filesFolder = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); }],
            ["isFavoriteByDefault", (o, n) => { (o as unknown as Channel).isFavoriteByDefault = n.getBooleanValue(); }],
            ["members", (o, n) => { (o as unknown as Channel).members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); }],
            ["membershipType", (o, n) => { (o as unknown as Channel).membershipType = n.getEnumValue<ChannelMembershipType>(ChannelMembershipType); }],
            ["messages", (o, n) => { (o as unknown as Channel).messages = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); }],
            ["tabs", (o, n) => { (o as unknown as Channel).tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); }],
            ["webUrl", (o, n) => { (o as unknown as Channel).webUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the isFavoriteByDefault property value. Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
     * @returns a boolean
     */
    public get isFavoriteByDefault() {
        return this._isFavoriteByDefault;
    };
    /**
     * Sets the isFavoriteByDefault property value. Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
     * @param value Value to set for the isFavoriteByDefault property.
     */
    public set isFavoriteByDefault(value: boolean | undefined) {
        this._isFavoriteByDefault = value;
    };
    /**
     * Gets the members property value. A collection of membership records associated with the channel.
     * @returns a conversationMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A collection of membership records associated with the channel.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the membershipType property value. The type of the channel. Can be set during creation and can't be changed. Possible values are: standard - Channel inherits the list of members of the parent team; private - Channel can have members that are a subset of all the members on the parent team.
     * @returns a channelMembershipType
     */
    public get membershipType() {
        return this._membershipType;
    };
    /**
     * Sets the membershipType property value. The type of the channel. Can be set during creation and can't be changed. Possible values are: standard - Channel inherits the list of members of the parent team; private - Channel can have members that are a subset of all the members on the parent team.
     * @param value Value to set for the membershipType property.
     */
    public set membershipType(value: ChannelMembershipType | undefined) {
        this._membershipType = value;
    };
    /**
     * Gets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
     * @returns a chatMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ChatMessage[] | undefined) {
        this._messages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("email", this.email);
        writer.writeObjectValue<DriveItem>("filesFolder", this.filesFolder);
        writer.writeBooleanValue("isFavoriteByDefault", this.isFavoriteByDefault);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", this.members);
        writer.writeEnumValue<ChannelMembershipType>("membershipType", this.membershipType);
        writer.writeCollectionOfObjectValues<ChatMessage>("messages", this.messages);
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", this.tabs);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the tabs property value. A collection of all the tabs in the channel. A navigation property.
     * @returns a teamsTab
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Sets the tabs property value. A collection of all the tabs in the channel. A navigation property.
     * @param value Value to set for the tabs property.
     */
    public set tabs(value: TeamsTab[] | undefined) {
        this._tabs = value;
    };
    /**
     * Gets the webUrl property value. A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
