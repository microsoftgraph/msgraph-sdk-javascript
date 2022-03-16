import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class BookingWorkTimeSlot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The time of the day when work stops. For example, 17:00:00.0000000.  */
    private _endTime?: TimeOnly | undefined;
    /** The time of the day when work starts. For example, 08:00:00.0000000.  */
    private _startTime?: TimeOnly | undefined;
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
     * Instantiates a new bookingWorkTimeSlot and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the endTime property value. The time of the day when work stops. For example, 17:00:00.0000000.
     * @returns a TimeOnly
     */
    public get endTime() {
        return this._endTime;
    };
    /**
     * Sets the endTime property value. The time of the day when work stops. For example, 17:00:00.0000000.
     * @param value Value to set for the endTime property.
     */
    public set endTime(value: TimeOnly | undefined) {
        this._endTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endTime", (o, n) => { (o as unknown as BookingWorkTimeSlot).endTime = n.getTimeOnlyValue(); }],
            ["startTime", (o, n) => { (o as unknown as BookingWorkTimeSlot).startTime = n.getTimeOnlyValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeTimeOnlyValue("endTime", this.endTime);
        writer.writeTimeOnlyValue("startTime", this.startTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startTime property value. The time of the day when work starts. For example, 08:00:00.0000000.
     * @returns a TimeOnly
     */
    public get startTime() {
        return this._startTime;
    };
    /**
     * Sets the startTime property value. The time of the day when work starts. For example, 08:00:00.0000000.
     * @param value Value to set for the startTime property.
     */
    public set startTime(value: TimeOnly | undefined) {
        this._startTime = value;
    };
}
