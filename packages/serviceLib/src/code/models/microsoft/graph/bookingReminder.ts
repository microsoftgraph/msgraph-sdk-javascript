import {BookingReminderRecipients} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingReminder implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The message in the reminder.  */
    private _message?: string | undefined;
    /** The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.  */
    private _offset?: Duration | undefined;
    /** The persons who should receive the reminder. Possible values are: allAttendees, staff, customer, unknownFutureValue.  */
    private _recipients?: BookingReminderRecipients | undefined;
    /**
     * Instantiates a new bookingReminder and sets the default values.
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
     * Gets the message property value. The message in the reminder.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Gets the offset property value. The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     * @returns a Duration
     */
    public get offset() {
        return this._offset;
    };
    /**
     * Gets the recipients property value. The persons who should receive the reminder. Possible values are: allAttendees, staff, customer, unknownFutureValue.
     * @returns a bookingReminderRecipients
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["message", (o, n) => { (o as unknown as BookingReminder).message = n.getStringValue(); }],
            ["offset", (o, n) => { (o as unknown as BookingReminder).offset = n.getDurationValue(); }],
            ["recipients", (o, n) => { (o as unknown as BookingReminder).recipients = n.getEnumValue<BookingReminderRecipients>(BookingReminderRecipients); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeDurationValue("offset", this.offset);
        writer.writeEnumValue<BookingReminderRecipients>("recipients", this.recipients);
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
     * Sets the message property value. The message in the reminder.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Sets the offset property value. The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format.
     * @param value Value to set for the offset property.
     */
    public set offset(value: Duration | undefined) {
        this._offset = value;
    };
    /**
     * Sets the recipients property value. The persons who should receive the reminder. Possible values are: allAttendees, staff, customer, unknownFutureValue.
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: BookingReminderRecipients | undefined) {
        this._recipients = value;
    };
}
