import {ScheduleEntityTheme} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftActivity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Customer defined code for the shiftActivity. Required.  */
    private _code?: string | undefined;
    /** The name of the shiftActivity. Required.  */
    private _displayName?: string | undefined;
    /** The end date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.  */
    private _endDateTime?: Date | undefined;
    /** Indicates whether the microsoft.graph.user should be paid for the activity during their shift. Required.  */
    private _isPaid?: boolean | undefined;
    /** The start date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.  */
    private _startDateTime?: Date | undefined;
    private _theme?: ScheduleEntityTheme | undefined;
    /**
     * Instantiates a new shiftActivity and sets the default values.
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
     * Gets the code property value. Customer defined code for the shiftActivity. Required.
     * @returns a string
     */
    public get code() {
        return this._code;
    };
    /**
     * Gets the displayName property value. The name of the shiftActivity. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the endDateTime property value. The end date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the isPaid property value. Indicates whether the microsoft.graph.user should be paid for the activity during their shift. Required.
     * @returns a boolean
     */
    public get isPaid() {
        return this._isPaid;
    };
    /**
     * Gets the startDateTime property value. The start date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the theme property value. 
     * @returns a scheduleEntityTheme
     */
    public get theme() {
        return this._theme;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["code", (o, n) => { (o as unknown as ShiftActivity).code = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ShiftActivity).displayName = n.getStringValue(); }],
            ["endDateTime", (o, n) => { (o as unknown as ShiftActivity).endDateTime = n.getDateValue(); }],
            ["isPaid", (o, n) => { (o as unknown as ShiftActivity).isPaid = n.getBooleanValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as ShiftActivity).startDateTime = n.getDateValue(); }],
            ["theme", (o, n) => { (o as unknown as ShiftActivity).theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("code", this.code);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeBooleanValue("isPaid", this.isPaid);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeEnumValue<ScheduleEntityTheme>("theme", this.theme);
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
     * Sets the code property value. Customer defined code for the shiftActivity. Required.
     * @param value Value to set for the code property.
     */
    public set code(value: string | undefined) {
        this._code = value;
    };
    /**
     * Sets the displayName property value. The name of the shiftActivity. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the endDateTime property value. The end date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the isPaid property value. Indicates whether the microsoft.graph.user should be paid for the activity during their shift. Required.
     * @param value Value to set for the isPaid property.
     */
    public set isPaid(value: boolean | undefined) {
        this._isPaid = value;
    };
    /**
     * Sets the startDateTime property value. The start date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the theme property value. 
     * @param value Value to set for the theme property.
     */
    public set theme(value: ScheduleEntityTheme | undefined) {
        this._theme = value;
    };
}
