import {AttendeeAvailability, FreeBusyStatus, Location, TimeSlot} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingTimeSuggestion implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** An array that shows the availability status of each attendee for this meeting suggestion.  */
    private _attendeeAvailability?: AttendeeAvailability[] | undefined;
    /** A percentage that represents the likelhood of all the attendees attending.  */
    private _confidence?: number | undefined;
    /** An array that specifies the name and geographic location of each meeting location for this meeting suggestion.  */
    private _locations?: Location[] | undefined;
    /** A time period suggested for the meeting.  */
    private _meetingTimeSlot?: TimeSlot | undefined;
    /** Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence.  */
    private _order?: number | undefined;
    /** Availability of the meeting organizer for this meeting suggestion. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.  */
    private _organizerAvailability?: FreeBusyStatus | undefined;
    /** Reason for suggesting the meeting time.  */
    private _suggestionReason?: string | undefined;
    /**
     * Instantiates a new meetingTimeSuggestion and sets the default values.
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
     * Gets the attendeeAvailability property value. An array that shows the availability status of each attendee for this meeting suggestion.
     * @returns a attendeeAvailability
     */
    public get attendeeAvailability() {
        return this._attendeeAvailability;
    };
    /**
     * Gets the confidence property value. A percentage that represents the likelhood of all the attendees attending.
     * @returns a double
     */
    public get confidence() {
        return this._confidence;
    };
    /**
     * Gets the locations property value. An array that specifies the name and geographic location of each meeting location for this meeting suggestion.
     * @returns a location
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Gets the meetingTimeSlot property value. A time period suggested for the meeting.
     * @returns a timeSlot
     */
    public get meetingTimeSlot() {
        return this._meetingTimeSlot;
    };
    /**
     * Gets the order property value. Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence.
     * @returns a integer
     */
    public get order() {
        return this._order;
    };
    /**
     * Gets the organizerAvailability property value. Availability of the meeting organizer for this meeting suggestion. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @returns a freeBusyStatus
     */
    public get organizerAvailability() {
        return this._organizerAvailability;
    };
    /**
     * Gets the suggestionReason property value. Reason for suggesting the meeting time.
     * @returns a string
     */
    public get suggestionReason() {
        return this._suggestionReason;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["attendeeAvailability", (o, n) => { (o as unknown as MeetingTimeSuggestion).attendeeAvailability = n.getCollectionOfObjectValues<AttendeeAvailability>(AttendeeAvailability); }],
            ["confidence", (o, n) => { (o as unknown as MeetingTimeSuggestion).confidence = n.getNumberValue(); }],
            ["locations", (o, n) => { (o as unknown as MeetingTimeSuggestion).locations = n.getCollectionOfObjectValues<Location>(Location); }],
            ["meetingTimeSlot", (o, n) => { (o as unknown as MeetingTimeSuggestion).meetingTimeSlot = n.getObjectValue<TimeSlot>(TimeSlot); }],
            ["order", (o, n) => { (o as unknown as MeetingTimeSuggestion).order = n.getNumberValue(); }],
            ["organizerAvailability", (o, n) => { (o as unknown as MeetingTimeSuggestion).organizerAvailability = n.getEnumValue<FreeBusyStatus>(FreeBusyStatus); }],
            ["suggestionReason", (o, n) => { (o as unknown as MeetingTimeSuggestion).suggestionReason = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AttendeeAvailability>("attendeeAvailability", this.attendeeAvailability);
        writer.writeNumberValue("confidence", this.confidence);
        writer.writeCollectionOfObjectValues<Location>("locations", this.locations);
        writer.writeObjectValue<TimeSlot>("meetingTimeSlot", this.meetingTimeSlot);
        writer.writeNumberValue("order", this.order);
        writer.writeEnumValue<FreeBusyStatus>("organizerAvailability", this.organizerAvailability);
        writer.writeStringValue("suggestionReason", this.suggestionReason);
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
     * Sets the attendeeAvailability property value. An array that shows the availability status of each attendee for this meeting suggestion.
     * @param value Value to set for the attendeeAvailability property.
     */
    public set attendeeAvailability(value: AttendeeAvailability[] | undefined) {
        this._attendeeAvailability = value;
    };
    /**
     * Sets the confidence property value. A percentage that represents the likelhood of all the attendees attending.
     * @param value Value to set for the confidence property.
     */
    public set confidence(value: number | undefined) {
        this._confidence = value;
    };
    /**
     * Sets the locations property value. An array that specifies the name and geographic location of each meeting location for this meeting suggestion.
     * @param value Value to set for the locations property.
     */
    public set locations(value: Location[] | undefined) {
        this._locations = value;
    };
    /**
     * Sets the meetingTimeSlot property value. A time period suggested for the meeting.
     * @param value Value to set for the meetingTimeSlot property.
     */
    public set meetingTimeSlot(value: TimeSlot | undefined) {
        this._meetingTimeSlot = value;
    };
    /**
     * Sets the order property value. Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence.
     * @param value Value to set for the order property.
     */
    public set order(value: number | undefined) {
        this._order = value;
    };
    /**
     * Sets the organizerAvailability property value. Availability of the meeting organizer for this meeting suggestion. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
     * @param value Value to set for the organizerAvailability property.
     */
    public set organizerAvailability(value: FreeBusyStatus | undefined) {
        this._organizerAvailability = value;
    };
    /**
     * Sets the suggestionReason property value. Reason for suggesting the meeting time.
     * @param value Value to set for the suggestionReason property.
     */
    public set suggestionReason(value: string | undefined) {
        this._suggestionReason = value;
    };
}
