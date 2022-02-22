import {MeetingParticipantInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipants implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Information of the meeting attendees.  */
    private _attendees?: MeetingParticipantInfo[] | undefined;
    /** Information of the meeting organizer.  */
    private _organizer?: MeetingParticipantInfo | undefined;
    /**
     * Instantiates a new meetingParticipants and sets the default values.
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
     * Gets the attendees property value. Information of the meeting attendees.
     * @returns a meetingParticipantInfo
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Gets the organizer property value. Information of the meeting organizer.
     * @returns a meetingParticipantInfo
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["attendees", (o, n) => { (o as unknown as MeetingParticipants).attendees = n.getCollectionOfObjectValues<MeetingParticipantInfo>(MeetingParticipantInfo); }],
            ["organizer", (o, n) => { (o as unknown as MeetingParticipants).organizer = n.getObjectValue<MeetingParticipantInfo>(MeetingParticipantInfo); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<MeetingParticipantInfo>("attendees", this.attendees);
        writer.writeObjectValue<MeetingParticipantInfo>("organizer", this.organizer);
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
     * Sets the attendees property value. Information of the meeting attendees.
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: MeetingParticipantInfo[] | undefined) {
        this._attendees = value;
    };
    /**
     * Sets the organizer property value. Information of the meeting organizer.
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: MeetingParticipantInfo | undefined) {
        this._organizer = value;
    };
}
