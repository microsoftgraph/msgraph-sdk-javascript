import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {FreeBusyStatus} from './freeBusyStatus';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The date, time, and time zone that the corresponding event ends.  */
    private _end?: DateTimeTimeZone | undefined;
    /** The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional.  */
    private _isPrivate?: boolean | undefined;
    /** The location where the corresponding event is held or attended from. Optional.  */
    private _location?: string | undefined;
    /** The date, time, and time zone that the corresponding event starts.  */
    private _start?: DateTimeTimeZone | undefined;
    /** The availability status of the user or resource during the corresponding event. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.  */
    private _status?: FreeBusyStatus | undefined;
    /** The corresponding event's subject line. Optional.  */
    private _subject?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new scheduleItem and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the end property value. The date, time, and time zone that the corresponding event ends.
     * @returns a dateTimeTimeZone
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The date, time, and time zone that the corresponding event ends.
     * @param value Value to set for the end property.
     */
    public set end(value: DateTimeTimeZone | undefined) {
        this._end = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["end", (o, n) => { (o as unknown as ScheduleItem).end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); }],
            ["isPrivate", (o, n) => { (o as unknown as ScheduleItem).isPrivate = n.getBooleanValue(); }],
            ["location", (o, n) => { (o as unknown as ScheduleItem).location = n.getStringValue(); }],
            ["start", (o, n) => { (o as unknown as ScheduleItem).start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); }],
            ["status", (o, n) => { (o as unknown as ScheduleItem).status = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); }],
            ["subject", (o, n) => { (o as unknown as ScheduleItem).subject = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the isPrivate property value. The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional.
     * @returns a boolean
     */
    public get isPrivate() {
        return this._isPrivate;
    };
    /**
     * Sets the isPrivate property value. The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional.
     * @param value Value to set for the isPrivate property.
     */
    public set isPrivate(value: boolean | undefined) {
        this._isPrivate = value;
    };
    /**
     * Gets the location property value. The location where the corresponding event is held or attended from. Optional.
     * @returns a string
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location where the corresponding event is held or attended from. Optional.
     * @param value Value to set for the location property.
     */
    public set location(value: string | undefined) {
        this._location = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("end", this.end);
        writer.writeBooleanValue("isPrivate", this.isPrivate);
        writer.writeStringValue("location", this.location);
        writer.writeObjectValue<DateTimeTimeZone>("start", this.start);
        writer.writeEnumValue<FreeBusyStatus>("status", this.status);
        writer.writeStringValue("subject", this.subject);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the start property value. The date, time, and time zone that the corresponding event starts.
     * @returns a dateTimeTimeZone
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The date, time, and time zone that the corresponding event starts.
     * @param value Value to set for the start property.
     */
    public set start(value: DateTimeTimeZone | undefined) {
        this._start = value;
    };
    /**
     * Gets the status property value. The availability status of the user or resource during the corresponding event. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @returns a freeBusyStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The availability status of the user or resource during the corresponding event. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @param value Value to set for the status property.
     */
    public set status(value: FreeBusyStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the subject property value. The corresponding event's subject line. Optional.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The corresponding event's subject line. Optional.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
