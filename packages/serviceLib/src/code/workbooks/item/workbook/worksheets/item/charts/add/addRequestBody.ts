import {Json} from '../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _seriesBy?: string | undefined;
    private _sourceData?: Json | undefined;
    private _type?: string | undefined;
    /**
     * Instantiates a new addRequestBody and sets the default values.
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
     * Gets the seriesBy property value. 
     * @returns a string
     */
    public get seriesBy() {
        return this._seriesBy;
    };
    /**
     * Gets the sourceData property value. 
     * @returns a Json
     */
    public get sourceData() {
        return this._sourceData;
    };
    /**
     * Gets the type property value. 
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["seriesBy", (o, n) => { (o as unknown as AddRequestBody).seriesBy = n.getStringValue(); }],
            ["sourceData", (o, n) => { (o as unknown as AddRequestBody).sourceData = n.getObjectValue<Json>(Json); }],
            ["type", (o, n) => { (o as unknown as AddRequestBody).type = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("seriesBy", this.seriesBy);
        writer.writeObjectValue<Json>("sourceData", this.sourceData);
        writer.writeStringValue("type", this.type);
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
     * Sets the seriesBy property value. 
     * @param value Value to set for the seriesBy property.
     */
    public set seriesBy(value: string | undefined) {
        this._seriesBy = value;
    };
    /**
     * Sets the sourceData property value. 
     * @param value Value to set for the sourceData property.
     */
    public set sourceData(value: Json | undefined) {
        this._sourceData = value;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
