import {DateTimeTimeZone, Entity, Extension, Importance, ItemBody, LinkedResource, PatternedRecurrence, TaskStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TodoTask extends Entity implements Parsable {
    /** The task body that typically contains information about the task.  */
    private _body?: ItemBody | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.  */
    private _bodyLastModifiedDateTime?: Date | undefined;
    /** The date in the specified time zone that the task was finished.  */
    private _completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.  */
    private _createdDateTime?: Date | undefined;
    /** The date in the specified time zone that the task is to be finished.  */
    private _dueDateTime?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the task. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** The importance of the task. Possible values are: low, normal, high.  */
    private _importance?: Importance | undefined;
    /** Set to true if an alert is set to remind the user of the task.  */
    private _isReminderOn?: boolean | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** A collection of resources linked to the task.  */
    private _linkedResources?: LinkedResource[] | undefined;
    /** The recurrence pattern for the task.  */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The date and time for a reminder alert of the task to occur.  */
    private _reminderDateTime?: DateTimeTimeZone | undefined;
    /** Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.  */
    private _status?: TaskStatus | undefined;
    /** A brief description of the task.  */
    private _title?: string | undefined;
    /**
     * Instantiates a new todoTask and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the body property value. The task body that typically contains information about the task.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Gets the bodyLastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get bodyLastModifiedDateTime() {
        return this._bodyLastModifiedDateTime;
    };
    /**
     * Gets the completedDateTime property value. The date in the specified time zone that the task was finished.
     * @returns a dateTimeTimeZone
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Gets the createdDateTime property value. The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the dueDateTime property value. The date in the specified time zone that the task is to be finished.
     * @returns a dateTimeTimeZone
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the task. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the importance property value. The importance of the task. Possible values are: low, normal, high.
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Gets the isReminderOn property value. Set to true if an alert is set to remind the user of the task.
     * @returns a boolean
     */
    public get isReminderOn() {
        return this._isReminderOn;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the linkedResources property value. A collection of resources linked to the task.
     * @returns a linkedResource
     */
    public get linkedResources() {
        return this._linkedResources;
    };
    /**
     * Gets the recurrence property value. The recurrence pattern for the task.
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Gets the reminderDateTime property value. The date and time for a reminder alert of the task to occur.
     * @returns a dateTimeTimeZone
     */
    public get reminderDateTime() {
        return this._reminderDateTime;
    };
    /**
     * Gets the status property value. Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.
     * @returns a taskStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the title property value. A brief description of the task.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["body", (o, n) => { (o as unknown as TodoTask).body = n.getObjectValue<ItemBody>(ItemBody); }],
            ["bodyLastModifiedDateTime", (o, n) => { (o as unknown as TodoTask).bodyLastModifiedDateTime = n.getDateValue(); }],
            ["completedDateTime", (o, n) => { (o as unknown as TodoTask).completedDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["createdDateTime", (o, n) => { (o as unknown as TodoTask).createdDateTime = n.getDateValue(); }],
            ["dueDateTime", (o, n) => { (o as unknown as TodoTask).dueDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["extensions", (o, n) => { (o as unknown as TodoTask).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["importance", (o, n) => { (o as unknown as TodoTask).importance = n.getEnumValue<Importance>(Importance); }],
            ["isReminderOn", (o, n) => { (o as unknown as TodoTask).isReminderOn = n.getBooleanValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as TodoTask).lastModifiedDateTime = n.getDateValue(); }],
            ["linkedResources", (o, n) => { (o as unknown as TodoTask).linkedResources = n.getCollectionOfObjectValues<LinkedResource>(LinkedResource); }],
            ["recurrence", (o, n) => { (o as unknown as TodoTask).recurrence = n.getObjectValue<PatternedRecurrence>(PatternedRecurrence); }],
            ["reminderDateTime", (o, n) => { (o as unknown as TodoTask).reminderDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["status", (o, n) => { (o as unknown as TodoTask).status = n.getEnumValue<TaskStatus>(TaskStatus); }],
            ["title", (o, n) => { (o as unknown as TodoTask).title = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeDateValue("bodyLastModifiedDateTime", this.bodyLastModifiedDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("completedDateTime", this.completedDateTime);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", this.dueDateTime);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<LinkedResource>("linkedResources", this.linkedResources);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeObjectValue<DateTimeTimeZone>("reminderDateTime", this.reminderDateTime);
        writer.writeEnumValue<TaskStatus>("status", this.status);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Sets the body property value. The task body that typically contains information about the task.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Sets the bodyLastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the bodyLastModifiedDateTime property.
     */
    public set bodyLastModifiedDateTime(value: Date | undefined) {
        this._bodyLastModifiedDateTime = value;
    };
    /**
     * Sets the completedDateTime property value. The date in the specified time zone that the task was finished.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: DateTimeTimeZone | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the dueDateTime property value. The date in the specified time zone that the task is to be finished.
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: DateTimeTimeZone | undefined) {
        this._dueDateTime = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the task. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the importance property value. The importance of the task. Possible values are: low, normal, high.
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Sets the isReminderOn property value. Set to true if an alert is set to remind the user of the task.
     * @param value Value to set for the isReminderOn property.
     */
    public set isReminderOn(value: boolean | undefined) {
        this._isReminderOn = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the linkedResources property value. A collection of resources linked to the task.
     * @param value Value to set for the linkedResources property.
     */
    public set linkedResources(value: LinkedResource[] | undefined) {
        this._linkedResources = value;
    };
    /**
     * Sets the recurrence property value. The recurrence pattern for the task.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Sets the reminderDateTime property value. The date and time for a reminder alert of the task to occur.
     * @param value Value to set for the reminderDateTime property.
     */
    public set reminderDateTime(value: DateTimeTimeZone | undefined) {
        this._reminderDateTime = value;
    };
    /**
     * Sets the status property value. Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.
     * @param value Value to set for the status property.
     */
    public set status(value: TaskStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the title property value. A brief description of the task.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
