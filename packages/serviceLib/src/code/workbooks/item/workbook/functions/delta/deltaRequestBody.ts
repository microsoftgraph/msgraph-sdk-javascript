import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeltaRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _number1?: Json | undefined;
    private _number2?: Json | undefined;
    /**
     * Instantiates a new deltaRequestBody and sets the default values.
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
     * Gets the number1 property value. 
     * @returns a Json
     */
    public get number1() {
        return this._number1;
    };
    /**
     * Gets the number2 property value. 
     * @returns a Json
     */
    public get number2() {
        return this._number2;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["number1", (o, n) => { (o as unknown as DeltaRequestBody).number1 = n.getObjectValue<Json>(Json); }],
            ["number2", (o, n) => { (o as unknown as DeltaRequestBody).number2 = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("number1", this.number1);
        writer.writeObjectValue<Json>("number2", this.number2);
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
     * Sets the number1 property value. 
     * @param value Value to set for the number1 property.
     */
    public set number1(value: Json | undefined) {
        this._number1 = value;
    };
    /**
     * Sets the number2 property value. 
     * @param value Value to set for the number2 property.
     */
    public set number2(value: Json | undefined) {
        this._number2 = value;
    };
}
