import {Entity, Message, MessageRule, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailFolder extends Entity implements Parsable {
    /** The number of immediate child mailFolders in the current mailFolder.  */
    private _childFolderCount?: number | undefined;
    /** The collection of child folders in the mailFolder.  */
    private _childFolders?: MailFolder[] | undefined;
    /** The mailFolder's display name.  */
    private _displayName?: string | undefined;
    /** Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.  */
    private _isHidden?: boolean | undefined;
    /** The collection of rules that apply to the user's Inbox folder.  */
    private _messageRules?: MessageRule[] | undefined;
    /** The collection of messages in the mailFolder.  */
    private _messages?: Message[] | undefined;
    /** The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.  */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The unique identifier for the mailFolder's parent mailFolder.  */
    private _parentFolderId?: string | undefined;
    /** The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.  */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The number of items in the mailFolder.  */
    private _totalItemCount?: number | undefined;
    /** The number of items in the mailFolder marked as unread.  */
    private _unreadItemCount?: number | undefined;
    /**
     * Instantiates a new mailFolder and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
     * @returns a integer
     */
    public get childFolderCount() {
        return this._childFolderCount;
    };
    /**
     * Gets the childFolders property value. The collection of child folders in the mailFolder.
     * @returns a mailFolder
     */
    public get childFolders() {
        return this._childFolders;
    };
    /**
     * Gets the displayName property value. The mailFolder's display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
     * @returns a boolean
     */
    public get isHidden() {
        return this._isHidden;
    };
    /**
     * Gets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
     * @returns a messageRule
     */
    public get messageRules() {
        return this._messageRules;
    };
    /**
     * Gets the messages property value. The collection of messages in the mailFolder.
     * @returns a message
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Gets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Gets the totalItemCount property value. The number of items in the mailFolder.
     * @returns a integer
     */
    public get totalItemCount() {
        return this._totalItemCount;
    };
    /**
     * Gets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
     * @returns a integer
     */
    public get unreadItemCount() {
        return this._unreadItemCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["childFolderCount", (o, n) => { (o as unknown as MailFolder).childFolderCount = n.getNumberValue(); }],
            ["childFolders", (o, n) => { (o as unknown as MailFolder).childFolders = n.getCollectionOfObjectValues<MailFolder>(MailFolder); }],
            ["displayName", (o, n) => { (o as unknown as MailFolder).displayName = n.getStringValue(); }],
            ["isHidden", (o, n) => { (o as unknown as MailFolder).isHidden = n.getBooleanValue(); }],
            ["messageRules", (o, n) => { (o as unknown as MailFolder).messageRules = n.getCollectionOfObjectValues<MessageRule>(MessageRule); }],
            ["messages", (o, n) => { (o as unknown as MailFolder).messages = n.getCollectionOfObjectValues<Message>(Message); }],
            ["multiValueExtendedProperties", (o, n) => { (o as unknown as MailFolder).multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", (o, n) => { (o as unknown as MailFolder).parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", (o, n) => { (o as unknown as MailFolder).singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(SingleValueLegacyExtendedProperty); }],
            ["totalItemCount", (o, n) => { (o as unknown as MailFolder).totalItemCount = n.getNumberValue(); }],
            ["unreadItemCount", (o, n) => { (o as unknown as MailFolder).unreadItemCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("childFolderCount", this.childFolderCount);
        writer.writeCollectionOfObjectValues<MailFolder>("childFolders", this.childFolders);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isHidden", this.isHidden);
        writer.writeCollectionOfObjectValues<MessageRule>("messageRules", this.messageRules);
        writer.writeCollectionOfObjectValues<Message>("messages", this.messages);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeNumberValue("totalItemCount", this.totalItemCount);
        writer.writeNumberValue("unreadItemCount", this.unreadItemCount);
    };
    /**
     * Sets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
     * @param value Value to set for the childFolderCount property.
     */
    public set childFolderCount(value: number | undefined) {
        this._childFolderCount = value;
    };
    /**
     * Sets the childFolders property value. The collection of child folders in the mailFolder.
     * @param value Value to set for the childFolders property.
     */
    public set childFolders(value: MailFolder[] | undefined) {
        this._childFolders = value;
    };
    /**
     * Sets the displayName property value. The mailFolder's display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
     * @param value Value to set for the isHidden property.
     */
    public set isHidden(value: boolean | undefined) {
        this._isHidden = value;
    };
    /**
     * Sets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
     * @param value Value to set for the messageRules property.
     */
    public set messageRules(value: MessageRule[] | undefined) {
        this._messageRules = value;
    };
    /**
     * Sets the messages property value. The collection of messages in the mailFolder.
     * @param value Value to set for the messages property.
     */
    public set messages(value: Message[] | undefined) {
        this._messages = value;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Sets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Sets the totalItemCount property value. The number of items in the mailFolder.
     * @param value Value to set for the totalItemCount property.
     */
    public set totalItemCount(value: number | undefined) {
        this._totalItemCount = value;
    };
    /**
     * Sets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
     * @param value Value to set for the unreadItemCount property.
     */
    public set unreadItemCount(value: number | undefined) {
        this._unreadItemCount = value;
    };
}
