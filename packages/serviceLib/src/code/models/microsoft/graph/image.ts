import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Image implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Optional. Height of the image, in pixels. Read-only.  */
    private _height?: number | undefined;
    /** Optional. Width of the image, in pixels. Read-only.  */
    private _width?: number | undefined;
    /**
     * Instantiates a new image and sets the default values.
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
     * Gets the height property value. Optional. Height of the image, in pixels. Read-only.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Gets the width property value. Optional. Width of the image, in pixels. Read-only.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["height", (o, n) => { (o as unknown as Image).height = n.getNumberValue(); }],
            ["width", (o, n) => { (o as unknown as Image).width = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("height", this.height);
        writer.writeNumberValue("width", this.width);
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
     * Sets the height property value. Optional. Height of the image, in pixels. Read-only.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Sets the width property value. Optional. Width of the image, in pixels. Read-only.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
