import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TrimMeanRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _array?: Json | undefined;
    private _percent?: Json | undefined;
    /**
     * Instantiates a new trimMeanRequestBody and sets the default values.
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
     * Gets the array property value. 
     * @returns a Json
     */
    public get array() {
        return this._array;
    };
    /**
     * Gets the percent property value. 
     * @returns a Json
     */
    public get percent() {
        return this._percent;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["array", (o, n) => { (o as unknown as TrimMeanRequestBody).array = n.getObjectValue<Json>(Json); }],
            ["percent", (o, n) => { (o as unknown as TrimMeanRequestBody).percent = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("array", this.array);
        writer.writeObjectValue<Json>("percent", this.percent);
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
     * Sets the array property value. 
     * @param value Value to set for the array property.
     */
    public set array(value: Json | undefined) {
        this._array = value;
    };
    /**
     * Sets the percent property value. 
     * @param value Value to set for the percent property.
     */
    public set percent(value: Json | undefined) {
        this._percent = value;
    };
}
