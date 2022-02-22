import {PatternedRecurrence, TimeRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftAvailability implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Specifies the pattern for recurrence  */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The time slot(s) preferred by the user.  */
    private _timeSlots?: TimeRange[] | undefined;
    /** Specifies the time zone for the indicated time.  */
    private _timeZone?: string | undefined;
    /**
     * Instantiates a new shiftAvailability and sets the default values.
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
     * Gets the recurrence property value. Specifies the pattern for recurrence
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Gets the timeSlots property value. The time slot(s) preferred by the user.
     * @returns a timeRange
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Gets the timeZone property value. Specifies the time zone for the indicated time.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["recurrence", (o, n) => { (o as unknown as ShiftAvailability).recurrence = n.getObjectValue<PatternedRecurrence>(PatternedRecurrence); }],
            ["timeSlots", (o, n) => { (o as unknown as ShiftAvailability).timeSlots = n.getCollectionOfObjectValues<TimeRange>(TimeRange); }],
            ["timeZone", (o, n) => { (o as unknown as ShiftAvailability).timeZone = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeCollectionOfObjectValues<TimeRange>("timeSlots", this.timeSlots);
        writer.writeStringValue("timeZone", this.timeZone);
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
     * Sets the recurrence property value. Specifies the pattern for recurrence
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Sets the timeSlots property value. The time slot(s) preferred by the user.
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: TimeRange[] | undefined) {
        this._timeSlots = value;
    };
    /**
     * Sets the timeZone property value. Specifies the time zone for the indicated time.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
}
