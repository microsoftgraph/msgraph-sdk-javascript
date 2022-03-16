import {ScheduleChangeRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OfferShiftRequest extends ScheduleChangeRequest implements Parsable {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _recipientActionDateTime?: Date | undefined;
    /** Custom message sent by recipient of the offer shift request.  */
    private _recipientActionMessage?: string | undefined;
    /** User ID of the recipient of the offer shift request.  */
    private _recipientUserId?: string | undefined;
    /** User ID of the sender of the offer shift request.  */
    private _senderShiftId?: string | undefined;
    /**
     * Instantiates a new offerShiftRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["recipientActionDateTime", (o, n) => { (o as unknown as OfferShiftRequest).recipientActionDateTime = n.getDateValue(); }],
            ["recipientActionMessage", (o, n) => { (o as unknown as OfferShiftRequest).recipientActionMessage = n.getStringValue(); }],
            ["recipientUserId", (o, n) => { (o as unknown as OfferShiftRequest).recipientUserId = n.getStringValue(); }],
            ["senderShiftId", (o, n) => { (o as unknown as OfferShiftRequest).senderShiftId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the recipientActionDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get recipientActionDateTime() {
        return this._recipientActionDateTime;
    };
    /**
     * Sets the recipientActionDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the recipientActionDateTime property.
     */
    public set recipientActionDateTime(value: Date | undefined) {
        this._recipientActionDateTime = value;
    };
    /**
     * Gets the recipientActionMessage property value. Custom message sent by recipient of the offer shift request.
     * @returns a string
     */
    public get recipientActionMessage() {
        return this._recipientActionMessage;
    };
    /**
     * Sets the recipientActionMessage property value. Custom message sent by recipient of the offer shift request.
     * @param value Value to set for the recipientActionMessage property.
     */
    public set recipientActionMessage(value: string | undefined) {
        this._recipientActionMessage = value;
    };
    /**
     * Gets the recipientUserId property value. User ID of the recipient of the offer shift request.
     * @returns a string
     */
    public get recipientUserId() {
        return this._recipientUserId;
    };
    /**
     * Sets the recipientUserId property value. User ID of the recipient of the offer shift request.
     * @param value Value to set for the recipientUserId property.
     */
    public set recipientUserId(value: string | undefined) {
        this._recipientUserId = value;
    };
    /**
     * Gets the senderShiftId property value. User ID of the sender of the offer shift request.
     * @returns a string
     */
    public get senderShiftId() {
        return this._senderShiftId;
    };
    /**
     * Sets the senderShiftId property value. User ID of the sender of the offer shift request.
     * @param value Value to set for the senderShiftId property.
     */
    public set senderShiftId(value: string | undefined) {
        this._senderShiftId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("recipientActionDateTime", this.recipientActionDateTime);
        writer.writeStringValue("recipientActionMessage", this.recipientActionMessage);
        writer.writeStringValue("recipientUserId", this.recipientUserId);
        writer.writeStringValue("senderShiftId", this.senderShiftId);
    };
}
