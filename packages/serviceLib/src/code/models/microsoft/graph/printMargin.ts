import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintMargin implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The margin in microns from the bottom edge.  */
    private _bottom?: number | undefined;
    /** The margin in microns from the left edge.  */
    private _left?: number | undefined;
    /** The margin in microns from the right edge.  */
    private _right?: number | undefined;
    /** The margin in microns from the top edge.  */
    private _top?: number | undefined;
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
     * Gets the bottom property value. The margin in microns from the bottom edge.
     * @returns a integer
     */
    public get bottom() {
        return this._bottom;
    };
    /**
     * Sets the bottom property value. The margin in microns from the bottom edge.
     * @param value Value to set for the bottom property.
     */
    public set bottom(value: number | undefined) {
        this._bottom = value;
    };
    /**
     * Instantiates a new printMargin and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bottom", (o, n) => { (o as unknown as PrintMargin).bottom = n.getNumberValue(); }],
            ["left", (o, n) => { (o as unknown as PrintMargin).left = n.getNumberValue(); }],
            ["right", (o, n) => { (o as unknown as PrintMargin).right = n.getNumberValue(); }],
            ["top", (o, n) => { (o as unknown as PrintMargin).top = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the left property value. The margin in microns from the left edge.
     * @returns a integer
     */
    public get left() {
        return this._left;
    };
    /**
     * Sets the left property value. The margin in microns from the left edge.
     * @param value Value to set for the left property.
     */
    public set left(value: number | undefined) {
        this._left = value;
    };
    /**
     * Gets the right property value. The margin in microns from the right edge.
     * @returns a integer
     */
    public get right() {
        return this._right;
    };
    /**
     * Sets the right property value. The margin in microns from the right edge.
     * @param value Value to set for the right property.
     */
    public set right(value: number | undefined) {
        this._right = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("bottom", this.bottom);
        writer.writeNumberValue("left", this.left);
        writer.writeNumberValue("right", this.right);
        writer.writeNumberValue("top", this.top);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the top property value. The margin in microns from the top edge.
     * @returns a integer
     */
    public get top() {
        return this._top;
    };
    /**
     * Sets the top property value. The margin in microns from the top edge.
     * @param value Value to set for the top property.
     */
    public set top(value: number | undefined) {
        this._top = value;
    };
}
