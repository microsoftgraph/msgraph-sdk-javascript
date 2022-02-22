import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplexRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _iNum?: Json | undefined;
    private _realNum?: Json | undefined;
    private _suffix?: Json | undefined;
    /**
     * Instantiates a new complexRequestBody and sets the default values.
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
     * Gets the iNum property value. 
     * @returns a Json
     */
    public get iNum() {
        return this._iNum;
    };
    /**
     * Gets the realNum property value. 
     * @returns a Json
     */
    public get realNum() {
        return this._realNum;
    };
    /**
     * Gets the suffix property value. 
     * @returns a Json
     */
    public get suffix() {
        return this._suffix;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["iNum", (o, n) => { (o as unknown as ComplexRequestBody).iNum = n.getObjectValue<Json>(Json); }],
            ["realNum", (o, n) => { (o as unknown as ComplexRequestBody).realNum = n.getObjectValue<Json>(Json); }],
            ["suffix", (o, n) => { (o as unknown as ComplexRequestBody).suffix = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("iNum", this.iNum);
        writer.writeObjectValue<Json>("realNum", this.realNum);
        writer.writeObjectValue<Json>("suffix", this.suffix);
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
     * Sets the iNum property value. 
     * @param value Value to set for the iNum property.
     */
    public set iNum(value: Json | undefined) {
        this._iNum = value;
    };
    /**
     * Sets the realNum property value. 
     * @param value Value to set for the realNum property.
     */
    public set realNum(value: Json | undefined) {
        this._realNum = value;
    };
    /**
     * Sets the suffix property value. 
     * @param value Value to set for the suffix property.
     */
    public set suffix(value: Json | undefined) {
        this._suffix = value;
    };
}
