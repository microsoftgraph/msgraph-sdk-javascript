import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReplaceRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _newText?: Json | undefined;
    private _numChars?: Json | undefined;
    private _oldText?: Json | undefined;
    private _startNum?: Json | undefined;
    /**
     * Instantiates a new replaceRequestBody and sets the default values.
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
     * Gets the newText property value. 
     * @returns a Json
     */
    public get newText() {
        return this._newText;
    };
    /**
     * Gets the numChars property value. 
     * @returns a Json
     */
    public get numChars() {
        return this._numChars;
    };
    /**
     * Gets the oldText property value. 
     * @returns a Json
     */
    public get oldText() {
        return this._oldText;
    };
    /**
     * Gets the startNum property value. 
     * @returns a Json
     */
    public get startNum() {
        return this._startNum;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["newText", (o, n) => { (o as unknown as ReplaceRequestBody).newText = n.getObjectValue<Json>(Json); }],
            ["numChars", (o, n) => { (o as unknown as ReplaceRequestBody).numChars = n.getObjectValue<Json>(Json); }],
            ["oldText", (o, n) => { (o as unknown as ReplaceRequestBody).oldText = n.getObjectValue<Json>(Json); }],
            ["startNum", (o, n) => { (o as unknown as ReplaceRequestBody).startNum = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("newText", this.newText);
        writer.writeObjectValue<Json>("numChars", this.numChars);
        writer.writeObjectValue<Json>("oldText", this.oldText);
        writer.writeObjectValue<Json>("startNum", this.startNum);
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
     * Sets the newText property value. 
     * @param value Value to set for the newText property.
     */
    public set newText(value: Json | undefined) {
        this._newText = value;
    };
    /**
     * Sets the numChars property value. 
     * @param value Value to set for the numChars property.
     */
    public set numChars(value: Json | undefined) {
        this._numChars = value;
    };
    /**
     * Sets the oldText property value. 
     * @param value Value to set for the oldText property.
     */
    public set oldText(value: Json | undefined) {
        this._oldText = value;
    };
    /**
     * Sets the startNum property value. 
     * @param value Value to set for the startNum property.
     */
    public set startNum(value: Json | undefined) {
        this._startNum = value;
    };
}
