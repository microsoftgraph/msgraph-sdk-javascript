import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceUpdateMessageViewpoint implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Indicates whether the user archived the message.  */
    private _isArchived?: boolean | undefined;
    /** Indicates whether the user marked the message as favorite.  */
    private _isFavorited?: boolean | undefined;
    /** Indicates whether the user read the message.  */
    private _isRead?: boolean | undefined;
    /**
     * Instantiates a new serviceUpdateMessageViewpoint and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the isArchived property value. Indicates whether the user archived the message.
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Gets the isFavorited property value. Indicates whether the user marked the message as favorite.
     * @returns a boolean
     */
    public get isFavorited() {
        return this._isFavorited;
    };
    /**
     * Gets the isRead property value. Indicates whether the user read the message.
     * @returns a boolean
     */
    public get isRead() {
        return this._isRead;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["isArchived", (o, n) => { (o as unknown as ServiceUpdateMessageViewpoint).isArchived = n.getBooleanValue(); }],
            ["isFavorited", (o, n) => { (o as unknown as ServiceUpdateMessageViewpoint).isFavorited = n.getBooleanValue(); }],
            ["isRead", (o, n) => { (o as unknown as ServiceUpdateMessageViewpoint).isRead = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeBooleanValue("isFavorited", this.isFavorited);
        writer.writeBooleanValue("isRead", this.isRead);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the isArchived property value. Indicates whether the user archived the message.
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        this._isArchived = value;
    };
    /**
     * Sets the isFavorited property value. Indicates whether the user marked the message as favorite.
     * @param value Value to set for the isFavorited property.
     */
    public set isFavorited(value: boolean | undefined) {
        this._isFavorited = value;
    };
    /**
     * Sets the isRead property value. Indicates whether the user read the message.
     * @param value Value to set for the isRead property.
     */
    public set isRead(value: boolean | undefined) {
        this._isRead = value;
    };
}
