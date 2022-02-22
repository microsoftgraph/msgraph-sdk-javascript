import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _hour?: Json | undefined;
    private _minute?: Json | undefined;
    private _second?: Json | undefined;
    /**
     * Instantiates a new timeRequestBody and sets the default values.
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
     * Gets the hour property value. 
     * @returns a Json
     */
    public get hour() {
        return this._hour;
    };
    /**
     * Gets the minute property value. 
     * @returns a Json
     */
    public get minute() {
        return this._minute;
    };
    /**
     * Gets the second property value. 
     * @returns a Json
     */
    public get second() {
        return this._second;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["hour", (o, n) => { (o as unknown as TimeRequestBody).hour = n.getObjectValue<Json>(Json); }],
            ["minute", (o, n) => { (o as unknown as TimeRequestBody).minute = n.getObjectValue<Json>(Json); }],
            ["second", (o, n) => { (o as unknown as TimeRequestBody).second = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("hour", this.hour);
        writer.writeObjectValue<Json>("minute", this.minute);
        writer.writeObjectValue<Json>("second", this.second);
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
     * Sets the hour property value. 
     * @param value Value to set for the hour property.
     */
    public set hour(value: Json | undefined) {
        this._hour = value;
    };
    /**
     * Sets the minute property value. 
     * @param value Value to set for the minute property.
     */
    public set minute(value: Json | undefined) {
        this._minute = value;
    };
    /**
     * Sets the second property value. 
     * @param value Value to set for the second property.
     */
    public set second(value: Json | undefined) {
        this._second = value;
    };
}
