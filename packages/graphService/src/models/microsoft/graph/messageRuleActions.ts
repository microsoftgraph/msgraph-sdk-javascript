import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {Importance} from './importance';
import {Recipient} from './recipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageRuleActions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A list of categories to be assigned to a message.  */
    private _assignCategories?: string[] | undefined;
    /** The ID of a folder that a message is to be copied to.  */
    private _copyToFolder?: string | undefined;
    /** Indicates whether a message should be moved to the Deleted Items folder.  */
    private _delete?: boolean | undefined;
    /** The email addresses of the recipients to which a message should be forwarded as an attachment.  */
    private _forwardAsAttachmentTo?: Recipient[] | undefined;
    /** The email addresses of the recipients to which a message should be forwarded.  */
    private _forwardTo?: Recipient[] | undefined;
    /** Indicates whether a message should be marked as read.  */
    private _markAsRead?: boolean | undefined;
    private _markImportance?: Importance | undefined;
    /** The ID of the folder that a message will be moved to.  */
    private _moveToFolder?: string | undefined;
    /** Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.  */
    private _permanentDelete?: boolean | undefined;
    /** The email addresses to which a message should be redirected.  */
    private _redirectTo?: Recipient[] | undefined;
    /** Indicates whether subsequent rules should be evaluated.  */
    private _stopProcessingRules?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the assignCategories property value. A list of categories to be assigned to a message.
     * @returns a string
     */
    public get assignCategories() {
        return this._assignCategories;
    };
    /**
     * Sets the assignCategories property value. A list of categories to be assigned to a message.
     * @param value Value to set for the assignCategories property.
     */
    public set assignCategories(value: string[] | undefined) {
        this._assignCategories = value;
    };
    /**
     * Instantiates a new messageRuleActions and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @returns a string
     */
    public get copyToFolder() {
        return this._copyToFolder;
    };
    /**
     * Sets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @param value Value to set for the copyToFolder property.
     */
    public set copyToFolder(value: string | undefined) {
        this._copyToFolder = value;
    };
    /**
     * Gets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @returns a boolean
     */
    public get delete() {
        return this._delete;
    };
    /**
     * Sets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @param value Value to set for the delete property.
     */
    public set delete(value: boolean | undefined) {
        this._delete = value;
    };
    /**
     * Gets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @returns a recipient
     */
    public get forwardAsAttachmentTo() {
        return this._forwardAsAttachmentTo;
    };
    /**
     * Sets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @param value Value to set for the forwardAsAttachmentTo property.
     */
    public set forwardAsAttachmentTo(value: Recipient[] | undefined) {
        this._forwardAsAttachmentTo = value;
    };
    /**
     * Gets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @returns a recipient
     */
    public get forwardTo() {
        return this._forwardTo;
    };
    /**
     * Sets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @param value Value to set for the forwardTo property.
     */
    public set forwardTo(value: Recipient[] | undefined) {
        this._forwardTo = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["assignCategories", (o, n) => { (o as unknown as MessageRuleActions).assignCategories = n.getCollectionOfPrimitiveValues<string>(); }],
            ["copyToFolder", (o, n) => { (o as unknown as MessageRuleActions).copyToFolder = n.getStringValue(); }],
            ["delete", (o, n) => { (o as unknown as MessageRuleActions).delete = n.getBooleanValue(); }],
            ["forwardAsAttachmentTo", (o, n) => { (o as unknown as MessageRuleActions).forwardAsAttachmentTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["forwardTo", (o, n) => { (o as unknown as MessageRuleActions).forwardTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["markAsRead", (o, n) => { (o as unknown as MessageRuleActions).markAsRead = n.getBooleanValue(); }],
            ["markImportance", (o, n) => { (o as unknown as MessageRuleActions).markImportance = n.getEnumValue<Importance>(Importance); }],
            ["moveToFolder", (o, n) => { (o as unknown as MessageRuleActions).moveToFolder = n.getStringValue(); }],
            ["permanentDelete", (o, n) => { (o as unknown as MessageRuleActions).permanentDelete = n.getBooleanValue(); }],
            ["redirectTo", (o, n) => { (o as unknown as MessageRuleActions).redirectTo = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); }],
            ["stopProcessingRules", (o, n) => { (o as unknown as MessageRuleActions).stopProcessingRules = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the markAsRead property value. Indicates whether a message should be marked as read.
     * @returns a boolean
     */
    public get markAsRead() {
        return this._markAsRead;
    };
    /**
     * Sets the markAsRead property value. Indicates whether a message should be marked as read.
     * @param value Value to set for the markAsRead property.
     */
    public set markAsRead(value: boolean | undefined) {
        this._markAsRead = value;
    };
    /**
     * Gets the markImportance property value. 
     * @returns a importance
     */
    public get markImportance() {
        return this._markImportance;
    };
    /**
     * Sets the markImportance property value. 
     * @param value Value to set for the markImportance property.
     */
    public set markImportance(value: Importance | undefined) {
        this._markImportance = value;
    };
    /**
     * Gets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @returns a string
     */
    public get moveToFolder() {
        return this._moveToFolder;
    };
    /**
     * Sets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @param value Value to set for the moveToFolder property.
     */
    public set moveToFolder(value: string | undefined) {
        this._moveToFolder = value;
    };
    /**
     * Gets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @returns a boolean
     */
    public get permanentDelete() {
        return this._permanentDelete;
    };
    /**
     * Sets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @param value Value to set for the permanentDelete property.
     */
    public set permanentDelete(value: boolean | undefined) {
        this._permanentDelete = value;
    };
    /**
     * Gets the redirectTo property value. The email addresses to which a message should be redirected.
     * @returns a recipient
     */
    public get redirectTo() {
        return this._redirectTo;
    };
    /**
     * Sets the redirectTo property value. The email addresses to which a message should be redirected.
     * @param value Value to set for the redirectTo property.
     */
    public set redirectTo(value: Recipient[] | undefined) {
        this._redirectTo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("assignCategories", this.assignCategories);
        writer.writeStringValue("copyToFolder", this.copyToFolder);
        writer.writeBooleanValue("delete", this.delete);
        writer.writeCollectionOfObjectValues<Recipient>("forwardAsAttachmentTo", this.forwardAsAttachmentTo);
        writer.writeCollectionOfObjectValues<Recipient>("forwardTo", this.forwardTo);
        writer.writeBooleanValue("markAsRead", this.markAsRead);
        writer.writeEnumValue<Importance>("markImportance", this.markImportance);
        writer.writeStringValue("moveToFolder", this.moveToFolder);
        writer.writeBooleanValue("permanentDelete", this.permanentDelete);
        writer.writeCollectionOfObjectValues<Recipient>("redirectTo", this.redirectTo);
        writer.writeBooleanValue("stopProcessingRules", this.stopProcessingRules);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @returns a boolean
     */
    public get stopProcessingRules() {
        return this._stopProcessingRules;
    };
    /**
     * Sets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @param value Value to set for the stopProcessingRules property.
     */
    public set stopProcessingRules(value: boolean | undefined) {
        this._stopProcessingRules = value;
    };
}
