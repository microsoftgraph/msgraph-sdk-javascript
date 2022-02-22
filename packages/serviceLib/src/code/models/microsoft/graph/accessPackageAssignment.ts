import {AccessPackage, AccessPackageAssignmentState, AccessPackageSubject, EntitlementManagementSchedule, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignment extends Entity implements Parsable {
    /** Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.  */
    private _accessPackage?: AccessPackage | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _expiredDateTime?: Date | undefined;
    /** When the access assignment is to be in place. Read-only.  */
    private _schedule?: EntitlementManagementSchedule | undefined;
    /** The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).  */
    private _state?: AccessPackageAssignmentState | undefined;
    /** More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only.  */
    private _status?: string | undefined;
    /** The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.  */
    private _target?: AccessPackageSubject | undefined;
    /**
     * Instantiates a new accessPackageAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the accessPackage property value. Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     * @returns a accessPackage
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Gets the expiredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get expiredDateTime() {
        return this._expiredDateTime;
    };
    /**
     * Gets the schedule property value. When the access assignment is to be in place. Read-only.
     * @returns a entitlementManagementSchedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Gets the state property value. The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     * @returns a accessPackageAssignmentState
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the status property value. More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the target property value. The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     * @returns a accessPackageSubject
     */
    public get target() {
        return this._target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accessPackage", (o, n) => { (o as unknown as AccessPackageAssignment).accessPackage = n.getObjectValue<AccessPackage>(AccessPackage); }],
            ["expiredDateTime", (o, n) => { (o as unknown as AccessPackageAssignment).expiredDateTime = n.getDateValue(); }],
            ["schedule", (o, n) => { (o as unknown as AccessPackageAssignment).schedule = n.getObjectValue<EntitlementManagementSchedule>(EntitlementManagementSchedule); }],
            ["state", (o, n) => { (o as unknown as AccessPackageAssignment).state = n.getEnumValue<AccessPackageAssignmentState>(AccessPackageAssignmentState); }],
            ["status", (o, n) => { (o as unknown as AccessPackageAssignment).status = n.getStringValue(); }],
            ["target", (o, n) => { (o as unknown as AccessPackageAssignment).target = n.getObjectValue<AccessPackageSubject>(AccessPackageSubject); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AccessPackage>("accessPackage", this.accessPackage);
        writer.writeDateValue("expiredDateTime", this.expiredDateTime);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", this.schedule);
        writer.writeEnumValue<AccessPackageAssignmentState>("state", this.state);
        writer.writeStringValue("status", this.status);
        writer.writeObjectValue<AccessPackageSubject>("target", this.target);
    };
    /**
     * Sets the accessPackage property value. Read-only. Nullable. Supports $filter (eq) on the id property and $expand query parameters.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        this._accessPackage = value;
    };
    /**
     * Sets the expiredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the expiredDateTime property.
     */
    public set expiredDateTime(value: Date | undefined) {
        this._expiredDateTime = value;
    };
    /**
     * Sets the schedule property value. When the access assignment is to be in place. Read-only.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | undefined) {
        this._schedule = value;
    };
    /**
     * Sets the state property value. The state of the access package assignment. The possible values are: delivering, partiallyDelivered, delivered, expired, deliveryFailed, unknownFutureValue. Read-only. Supports $filter (eq).
     * @param value Value to set for the state property.
     */
    public set state(value: AccessPackageAssignmentState | undefined) {
        this._state = value;
    };
    /**
     * Sets the status property value. More information about the assignment lifecycle.  Possible values include Delivering, Delivered, NearExpiry1DayNotificationTriggered, or ExpiredNotificationTriggered.  Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Sets the target property value. The subject of the access package assignment. Read-only. Nullable. Supports $expand. Supports $filter (eq) on objectId.
     * @param value Value to set for the target property.
     */
    public set target(value: AccessPackageSubject | undefined) {
        this._target = value;
    };
}
