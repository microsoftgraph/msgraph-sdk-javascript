import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExactRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _text1?: Json | undefined;
    private _text2?: Json | undefined;
    /**
     * Instantiates a new exactRequestBody and sets the default values.
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
     * Gets the text1 property value. 
     * @returns a Json
     */
    public get text1() {
        return this._text1;
    };
    /**
     * Gets the text2 property value. 
     * @returns a Json
     */
    public get text2() {
        return this._text2;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["text1", (o, n) => { (o as unknown as ExactRequestBody).text1 = n.getObjectValue<Json>(Json); }],
            ["text2", (o, n) => { (o as unknown as ExactRequestBody).text2 = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("text1", this.text1);
        writer.writeObjectValue<Json>("text2", this.text2);
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
     * Sets the text1 property value. 
     * @param value Value to set for the text1 property.
     */
    public set text1(value: Json | undefined) {
        this._text1 = value;
    };
    /**
     * Sets the text2 property value. 
     * @param value Value to set for the text2 property.
     */
    public set text2(value: Json | undefined) {
        this._text2 = value;
    };
}
