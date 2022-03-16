import {DateTimeTimeZone} from '../../../models/microsoft/graph/';
import {createDateTimeTimeZoneFromDiscriminatorValue} from '../../../models/microsoft/graph/createDateTimeTimeZoneFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getSchedule method.  */
export class GetScheduleRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _availabilityViewInterval?: number | undefined;
    private _endTime?: DateTimeTimeZone | undefined;
    private _schedules?: string[] | undefined;
    private _startTime?: DateTimeTimeZone | undefined;
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
     * Gets the availabilityViewInterval property value. 
     * @returns a integer
     */
    public get availabilityViewInterval() {
        return this._availabilityViewInterval;
    };
    /**
     * Sets the availabilityViewInterval property value. 
     * @param value Value to set for the AvailabilityViewInterval property.
     */
    public set availabilityViewInterval(value: number | undefined) {
        this._availabilityViewInterval = value;
    };
    /**
     * Instantiates a new getScheduleRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the endTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. 
     * @param value Value to set for the EndTime property.
     */
    public set endTime(value: DateTimeTimeZone | undefined) {
        this._endTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["availabilityViewInterval", (o, n) => { (o as unknown as GetScheduleRequestBody).availabilityViewInterval = n.getNumberValue(); }],
            ["endTime", (o, n) => { (o as unknown as GetScheduleRequestBody).endTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); }],
            ["schedules", (o, n) => { (o as unknown as GetScheduleRequestBody).schedules = n.getCollectionOfPrimitiveValues<string>(); }],
            ["startTime", (o, n) => { (o as unknown as GetScheduleRequestBody).startTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the schedules property value. 
     * @returns a string
     */
    public get schedules() {
        return this._schedules;
    };
    /**
     * Sets the schedules property value. 
     * @param value Value to set for the Schedules property.
     */
    public set schedules(value: string[] | undefined) {
        this._schedules = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("availabilityViewInterval", this.availabilityViewInterval);
        writer.writeObjectValue<DateTimeTimeZone>("endTime", this.endTime);
        writer.writeCollectionOfPrimitiveValues<string>("schedules", this.schedules);
        writer.writeObjectValue<DateTimeTimeZone>("startTime", this.startTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. 
     * @param value Value to set for the StartTime property.
     */
    public set startTime(value: DateTimeTimeZone | undefined) {
        this._startTime = value;
    };
}
