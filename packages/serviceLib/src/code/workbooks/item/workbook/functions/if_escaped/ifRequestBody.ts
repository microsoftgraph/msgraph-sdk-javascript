import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IfRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _logicalTest?: Json | undefined;
    private _valueIfFalse?: Json | undefined;
    private _valueIfTrue?: Json | undefined;
    /**
     * Instantiates a new ifRequestBody and sets the default values.
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
     * Gets the logicalTest property value. 
     * @returns a Json
     */
    public get logicalTest() {
        return this._logicalTest;
    };
    /**
     * Gets the valueIfFalse property value. 
     * @returns a Json
     */
    public get valueIfFalse() {
        return this._valueIfFalse;
    };
    /**
     * Gets the valueIfTrue property value. 
     * @returns a Json
     */
    public get valueIfTrue() {
        return this._valueIfTrue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["logicalTest", (o, n) => { (o as unknown as IfRequestBody).logicalTest = n.getObjectValue<Json>(Json); }],
            ["valueIfFalse", (o, n) => { (o as unknown as IfRequestBody).valueIfFalse = n.getObjectValue<Json>(Json); }],
            ["valueIfTrue", (o, n) => { (o as unknown as IfRequestBody).valueIfTrue = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("logicalTest", this.logicalTest);
        writer.writeObjectValue<Json>("valueIfFalse", this.valueIfFalse);
        writer.writeObjectValue<Json>("valueIfTrue", this.valueIfTrue);
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
     * Sets the logicalTest property value. 
     * @param value Value to set for the logicalTest property.
     */
    public set logicalTest(value: Json | undefined) {
        this._logicalTest = value;
    };
    /**
     * Sets the valueIfFalse property value. 
     * @param value Value to set for the valueIfFalse property.
     */
    public set valueIfFalse(value: Json | undefined) {
        this._valueIfFalse = value;
    };
    /**
     * Sets the valueIfTrue property value. 
     * @param value Value to set for the valueIfTrue property.
     */
    public set valueIfTrue(value: Json | undefined) {
        this._valueIfTrue = value;
    };
}
