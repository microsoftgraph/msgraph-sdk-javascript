import {AttendanceInterval, Entity, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendanceRecord extends Entity implements Parsable {
    /** List of time periods between joining and leaving a meeting.  */
    private _attendanceIntervals?: AttendanceInterval[] | undefined;
    /** Email address of the user associated with this atttendance record.  */
    private _emailAddress?: string | undefined;
    /** Identity of the user associated with this atttendance record.  */
    private _identity?: Identity | undefined;
    /** Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.  */
    private _role?: string | undefined;
    /** Total duration of the attendances in seconds.  */
    private _totalAttendanceInSeconds?: number | undefined;
    /**
     * Instantiates a new attendanceRecord and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the attendanceIntervals property value. List of time periods between joining and leaving a meeting.
     * @returns a attendanceInterval
     */
    public get attendanceIntervals() {
        return this._attendanceIntervals;
    };
    /**
     * Gets the emailAddress property value. Email address of the user associated with this atttendance record.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Gets the identity property value. Identity of the user associated with this atttendance record.
     * @returns a identity
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Gets the role property value. Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     * @returns a string
     */
    public get role() {
        return this._role;
    };
    /**
     * Gets the totalAttendanceInSeconds property value. Total duration of the attendances in seconds.
     * @returns a integer
     */
    public get totalAttendanceInSeconds() {
        return this._totalAttendanceInSeconds;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["attendanceIntervals", (o, n) => { (o as unknown as AttendanceRecord).attendanceIntervals = n.getCollectionOfObjectValues<AttendanceInterval>(AttendanceInterval); }],
            ["emailAddress", (o, n) => { (o as unknown as AttendanceRecord).emailAddress = n.getStringValue(); }],
            ["identity", (o, n) => { (o as unknown as AttendanceRecord).identity = n.getObjectValue<Identity>(Identity); }],
            ["role", (o, n) => { (o as unknown as AttendanceRecord).role = n.getStringValue(); }],
            ["totalAttendanceInSeconds", (o, n) => { (o as unknown as AttendanceRecord).totalAttendanceInSeconds = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AttendanceInterval>("attendanceIntervals", this.attendanceIntervals);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeObjectValue<Identity>("identity", this.identity);
        writer.writeStringValue("role", this.role);
        writer.writeNumberValue("totalAttendanceInSeconds", this.totalAttendanceInSeconds);
    };
    /**
     * Sets the attendanceIntervals property value. List of time periods between joining and leaving a meeting.
     * @param value Value to set for the attendanceIntervals property.
     */
    public set attendanceIntervals(value: AttendanceInterval[] | undefined) {
        this._attendanceIntervals = value;
    };
    /**
     * Sets the emailAddress property value. Email address of the user associated with this atttendance record.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * Sets the identity property value. Identity of the user associated with this atttendance record.
     * @param value Value to set for the identity property.
     */
    public set identity(value: Identity | undefined) {
        this._identity = value;
    };
    /**
     * Sets the role property value. Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     * @param value Value to set for the role property.
     */
    public set role(value: string | undefined) {
        this._role = value;
    };
    /**
     * Sets the totalAttendanceInSeconds property value. Total duration of the attendances in seconds.
     * @param value Value to set for the totalAttendanceInSeconds property.
     */
    public set totalAttendanceInSeconds(value: number | undefined) {
        this._totalAttendanceInSeconds = value;
    };
}
