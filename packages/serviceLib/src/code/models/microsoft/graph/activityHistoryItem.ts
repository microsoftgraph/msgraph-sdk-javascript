import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {Entity, UserActivity} from './index';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActivityHistoryItem extends Entity implements Parsable {
    /** Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.  */
    private _activeDurationSeconds?: number | undefined;
    private _activity?: UserActivity | undefined;
    /** Set by the server. DateTime in UTC when the object was created on the server.  */
    private _createdDateTime?: Date | undefined;
    /** Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.  */
    private _expirationDateTime?: Date | undefined;
    /** Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.  */
    private _lastActiveDateTime?: Date | undefined;
    /** Set by the server. DateTime in UTC when the object was modified on the server.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.  */
    private _startedDateTime?: Date | undefined;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.  */
    private _status?: Status | undefined;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.  */
    private _userTimezone?: string | undefined;
    /**
     * Gets the activeDurationSeconds property value. Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
     * @returns a integer
     */
    public get activeDurationSeconds() {
        return this._activeDurationSeconds;
    };
    /**
     * Sets the activeDurationSeconds property value. Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
     * @param value Value to set for the activeDurationSeconds property.
     */
    public set activeDurationSeconds(value: number | undefined) {
        this._activeDurationSeconds = value;
    };
    /**
     * Gets the activity property value. 
     * @returns a userActivity
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. 
     * @param value Value to set for the activity property.
     */
    public set activity(value: UserActivity | undefined) {
        this._activity = value;
    };
    /**
     * Instantiates a new activityHistoryItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Set by the server. DateTime in UTC when the object was created on the server.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the expirationDateTime property value. Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activeDurationSeconds", (o, n) => { (o as unknown as ActivityHistoryItem).activeDurationSeconds = n.getNumberValue(); }],
            ["activity", (o, n) => { (o as unknown as ActivityHistoryItem).activity = n.getObjectValue<UserActivity>(createUserActivityFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as ActivityHistoryItem).createdDateTime = n.getDateValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as ActivityHistoryItem).expirationDateTime = n.getDateValue(); }],
            ["lastActiveDateTime", (o, n) => { (o as unknown as ActivityHistoryItem).lastActiveDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as ActivityHistoryItem).lastModifiedDateTime = n.getDateValue(); }],
            ["startedDateTime", (o, n) => { (o as unknown as ActivityHistoryItem).startedDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as ActivityHistoryItem).status = n.getEnumValue<Status>(Status); }],
            ["userTimezone", (o, n) => { (o as unknown as ActivityHistoryItem).userTimezone = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the lastActiveDateTime property value. Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
     * @returns a Date
     */
    public get lastActiveDateTime() {
        return this._lastActiveDateTime;
    };
    /**
     * Sets the lastActiveDateTime property value. Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
     * @param value Value to set for the lastActiveDateTime property.
     */
    public set lastActiveDateTime(value: Date | undefined) {
        this._lastActiveDateTime = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Set by the server. DateTime in UTC when the object was modified on the server.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("activeDurationSeconds", this.activeDurationSeconds);
        writer.writeObjectValue<UserActivity>("activity", this.activity);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastActiveDateTime", this.lastActiveDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("startedDateTime", this.startedDateTime);
        writer.writeEnumValue<Status>("status", this.status);
        writer.writeStringValue("userTimezone", this.userTimezone);
    };
    /**
     * Gets the startedDateTime property value. Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
     * @returns a Date
     */
    public get startedDateTime() {
        return this._startedDateTime;
    };
    /**
     * Sets the startedDateTime property value. Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
     * @param value Value to set for the startedDateTime property.
     */
    public set startedDateTime(value: Date | undefined) {
        this._startedDateTime = value;
    };
    /**
     * Gets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @returns a status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     * @param value Value to set for the status property.
     */
    public set status(value: Status | undefined) {
        this._status = value;
    };
    /**
     * Gets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
     * @returns a string
     */
    public get userTimezone() {
        return this._userTimezone;
    };
    /**
     * Sets the userTimezone property value. Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
     * @param value Value to set for the userTimezone property.
     */
    public set userTimezone(value: string | undefined) {
        this._userTimezone = value;
    };
}
