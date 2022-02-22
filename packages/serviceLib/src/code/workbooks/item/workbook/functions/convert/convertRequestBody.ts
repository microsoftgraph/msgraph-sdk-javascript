import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConvertRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _fromUnit?: Json | undefined;
    private _number?: Json | undefined;
    private _toUnit?: Json | undefined;
    /**
     * Instantiates a new convertRequestBody and sets the default values.
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
     * Gets the fromUnit property value. 
     * @returns a Json
     */
    public get fromUnit() {
        return this._fromUnit;
    };
    /**
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Gets the toUnit property value. 
     * @returns a Json
     */
    public get toUnit() {
        return this._toUnit;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["fromUnit", (o, n) => { (o as unknown as ConvertRequestBody).fromUnit = n.getObjectValue<Json>(Json); }],
            ["number", (o, n) => { (o as unknown as ConvertRequestBody).number = n.getObjectValue<Json>(Json); }],
            ["toUnit", (o, n) => { (o as unknown as ConvertRequestBody).toUnit = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("fromUnit", this.fromUnit);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("toUnit", this.toUnit);
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
     * Sets the fromUnit property value. 
     * @param value Value to set for the fromUnit property.
     */
    public set fromUnit(value: Json | undefined) {
        this._fromUnit = value;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Sets the toUnit property value. 
     * @param value Value to set for the toUnit property.
     */
    public set toUnit(value: Json | undefined) {
        this._toUnit = value;
    };
}
