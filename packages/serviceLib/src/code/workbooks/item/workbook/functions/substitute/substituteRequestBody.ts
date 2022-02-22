import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubstituteRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _instanceNum?: Json | undefined;
    private _newText?: Json | undefined;
    private _oldText?: Json | undefined;
    private _text?: Json | undefined;
    /**
     * Instantiates a new substituteRequestBody and sets the default values.
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
     * Gets the instanceNum property value. 
     * @returns a Json
     */
    public get instanceNum() {
        return this._instanceNum;
    };
    /**
     * Gets the newText property value. 
     * @returns a Json
     */
    public get newText() {
        return this._newText;
    };
    /**
     * Gets the oldText property value. 
     * @returns a Json
     */
    public get oldText() {
        return this._oldText;
    };
    /**
     * Gets the text property value. 
     * @returns a Json
     */
    public get text() {
        return this._text;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["instanceNum", (o, n) => { (o as unknown as SubstituteRequestBody).instanceNum = n.getObjectValue<Json>(Json); }],
            ["newText", (o, n) => { (o as unknown as SubstituteRequestBody).newText = n.getObjectValue<Json>(Json); }],
            ["oldText", (o, n) => { (o as unknown as SubstituteRequestBody).oldText = n.getObjectValue<Json>(Json); }],
            ["text", (o, n) => { (o as unknown as SubstituteRequestBody).text = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("instanceNum", this.instanceNum);
        writer.writeObjectValue<Json>("newText", this.newText);
        writer.writeObjectValue<Json>("oldText", this.oldText);
        writer.writeObjectValue<Json>("text", this.text);
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
     * Sets the instanceNum property value. 
     * @param value Value to set for the instanceNum property.
     */
    public set instanceNum(value: Json | undefined) {
        this._instanceNum = value;
    };
    /**
     * Sets the newText property value. 
     * @param value Value to set for the newText property.
     */
    public set newText(value: Json | undefined) {
        this._newText = value;
    };
    /**
     * Sets the oldText property value. 
     * @param value Value to set for the oldText property.
     */
    public set oldText(value: Json | undefined) {
        this._oldText = value;
    };
    /**
     * Sets the text property value. 
     * @param value Value to set for the text property.
     */
    public set text(value: Json | undefined) {
        this._text = value;
    };
}
