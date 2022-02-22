import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RgbColor implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Blue value  */
    private _b?: number | undefined;
    /** Green value  */
    private _g?: number | undefined;
    /** Red value  */
    private _r?: number | undefined;
    /**
     * Instantiates a new rgbColor and sets the default values.
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
     * Gets the b property value. Blue value
     * @returns a integer
     */
    public get b() {
        return this._b;
    };
    /**
     * Gets the g property value. Green value
     * @returns a integer
     */
    public get g() {
        return this._g;
    };
    /**
     * Gets the r property value. Red value
     * @returns a integer
     */
    public get r() {
        return this._r;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["b", (o, n) => { (o as unknown as RgbColor).b = n.getNumberValue(); }],
            ["g", (o, n) => { (o as unknown as RgbColor).g = n.getNumberValue(); }],
            ["r", (o, n) => { (o as unknown as RgbColor).r = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("b", this.b);
        writer.writeNumberValue("g", this.g);
        writer.writeNumberValue("r", this.r);
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
     * Sets the b property value. Blue value
     * @param value Value to set for the b property.
     */
    public set b(value: number | undefined) {
        this._b = value;
    };
    /**
     * Sets the g property value. Green value
     * @param value Value to set for the g property.
     */
    public set g(value: number | undefined) {
        this._g = value;
    };
    /**
     * Sets the r property value. Red value
     * @param value Value to set for the r property.
     */
    public set r(value: number | undefined) {
        this._r = value;
    };
}
