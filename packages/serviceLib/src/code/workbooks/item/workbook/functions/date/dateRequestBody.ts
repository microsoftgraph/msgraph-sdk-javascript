import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DateRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _day?: Json | undefined;
    private _month?: Json | undefined;
    private _year?: Json | undefined;
    /**
     * Instantiates a new dateRequestBody and sets the default values.
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
     * Gets the day property value. 
     * @returns a Json
     */
    public get day() {
        return this._day;
    };
    /**
     * Gets the month property value. 
     * @returns a Json
     */
    public get month() {
        return this._month;
    };
    /**
     * Gets the year property value. 
     * @returns a Json
     */
    public get year() {
        return this._year;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["day", (o, n) => { (o as unknown as DateRequestBody).day = n.getObjectValue<Json>(Json); }],
            ["month", (o, n) => { (o as unknown as DateRequestBody).month = n.getObjectValue<Json>(Json); }],
            ["year", (o, n) => { (o as unknown as DateRequestBody).year = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("day", this.day);
        writer.writeObjectValue<Json>("month", this.month);
        writer.writeObjectValue<Json>("year", this.year);
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
     * Sets the day property value. 
     * @param value Value to set for the day property.
     */
    public set day(value: Json | undefined) {
        this._day = value;
    };
    /**
     * Sets the month property value. 
     * @param value Value to set for the month property.
     */
    public set month(value: Json | undefined) {
        this._month = value;
    };
    /**
     * Sets the year property value. 
     * @param value Value to set for the year property.
     */
    public set year(value: Json | undefined) {
        this._year = value;
    };
}
