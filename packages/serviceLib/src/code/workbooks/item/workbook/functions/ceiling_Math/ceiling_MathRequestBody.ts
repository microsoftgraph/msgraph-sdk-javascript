import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Ceiling_MathRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _mode?: Json | undefined;
    private _number?: Json | undefined;
    private _significance?: Json | undefined;
    /**
     * Instantiates a new ceiling_MathRequestBody and sets the default values.
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
     * Gets the mode property value. 
     * @returns a Json
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Gets the significance property value. 
     * @returns a Json
     */
    public get significance() {
        return this._significance;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["mode", (o, n) => { (o as unknown as Ceiling_MathRequestBody).mode = n.getObjectValue<Json>(Json); }],
            ["number", (o, n) => { (o as unknown as Ceiling_MathRequestBody).number = n.getObjectValue<Json>(Json); }],
            ["significance", (o, n) => { (o as unknown as Ceiling_MathRequestBody).significance = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("mode", this.mode);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("significance", this.significance);
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
     * Sets the mode property value. 
     * @param value Value to set for the mode property.
     */
    public set mode(value: Json | undefined) {
        this._mode = value;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Sets the significance property value. 
     * @param value Value to set for the significance property.
     */
    public set significance(value: Json | undefined) {
        this._significance = value;
    };
}
