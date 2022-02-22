import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FindBRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _findText?: Json | undefined;
    private _startNum?: Json | undefined;
    private _withinText?: Json | undefined;
    /**
     * Instantiates a new findBRequestBody and sets the default values.
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
     * Gets the findText property value. 
     * @returns a Json
     */
    public get findText() {
        return this._findText;
    };
    /**
     * Gets the startNum property value. 
     * @returns a Json
     */
    public get startNum() {
        return this._startNum;
    };
    /**
     * Gets the withinText property value. 
     * @returns a Json
     */
    public get withinText() {
        return this._withinText;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["findText", (o, n) => { (o as unknown as FindBRequestBody).findText = n.getObjectValue<Json>(Json); }],
            ["startNum", (o, n) => { (o as unknown as FindBRequestBody).startNum = n.getObjectValue<Json>(Json); }],
            ["withinText", (o, n) => { (o as unknown as FindBRequestBody).withinText = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("findText", this.findText);
        writer.writeObjectValue<Json>("startNum", this.startNum);
        writer.writeObjectValue<Json>("withinText", this.withinText);
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
     * Sets the findText property value. 
     * @param value Value to set for the findText property.
     */
    public set findText(value: Json | undefined) {
        this._findText = value;
    };
    /**
     * Sets the startNum property value. 
     * @param value Value to set for the startNum property.
     */
    public set startNum(value: Json | undefined) {
        this._startNum = value;
    };
    /**
     * Sets the withinText property value. 
     * @param value Value to set for the withinText property.
     */
    public set withinText(value: Json | undefined) {
        this._withinText = value;
    };
}
