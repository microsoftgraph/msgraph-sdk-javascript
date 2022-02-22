import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamGuestSettings implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If set to true, guests can add and update channels.  */
    private _allowCreateUpdateChannels?: boolean | undefined;
    /** If set to true, guests can delete channels.  */
    private _allowDeleteChannels?: boolean | undefined;
    /**
     * Instantiates a new teamGuestSettings and sets the default values.
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
     * Gets the allowCreateUpdateChannels property value. If set to true, guests can add and update channels.
     * @returns a boolean
     */
    public get allowCreateUpdateChannels() {
        return this._allowCreateUpdateChannels;
    };
    /**
     * Gets the allowDeleteChannels property value. If set to true, guests can delete channels.
     * @returns a boolean
     */
    public get allowDeleteChannels() {
        return this._allowDeleteChannels;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowCreateUpdateChannels", (o, n) => { (o as unknown as TeamGuestSettings).allowCreateUpdateChannels = n.getBooleanValue(); }],
            ["allowDeleteChannels", (o, n) => { (o as unknown as TeamGuestSettings).allowDeleteChannels = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowCreateUpdateChannels", this.allowCreateUpdateChannels);
        writer.writeBooleanValue("allowDeleteChannels", this.allowDeleteChannels);
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
     * Sets the allowCreateUpdateChannels property value. If set to true, guests can add and update channels.
     * @param value Value to set for the allowCreateUpdateChannels property.
     */
    public set allowCreateUpdateChannels(value: boolean | undefined) {
        this._allowCreateUpdateChannels = value;
    };
    /**
     * Sets the allowDeleteChannels property value. If set to true, guests can delete channels.
     * @param value Value to set for the allowDeleteChannels property.
     */
    public set allowDeleteChannels(value: boolean | undefined) {
        this._allowDeleteChannels = value;
    };
}
