import {AccessPackage, AccessPackageAssignment, AccessPackageRequestState, AccessPackageRequestType, AccessPackageSubject, EntitlementManagementSchedule, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequest extends Entity implements Parsable {
    /** The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable.  Supports $expand.  */
    private _accessPackage?: AccessPackage | undefined;
    /** For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.  */
    private _assignment?: AccessPackageAssignment | undefined;
    /** The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _completedDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.  */
    private _requestor?: AccessPackageSubject | undefined;
    /** The type of the request. The possible values are: notSpecified, userAdd, userUpdate, userRemove, adminAdd, adminUpdate, adminRemove, systemAdd, systemUpdate, systemRemove, onBehalfAdd, unknownFutureValue. A request from the user themselves would have requestType of UserAdd or UserRemove. This property cannot be changed once set.  */
    private _requestType?: AccessPackageRequestType | undefined;
    /** The range of dates that access is to be assigned to the requestor. This property cannot be changed once set.  */
    private _schedule?: EntitlementManagementSchedule | undefined;
    /** The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only.  */
    private _state?: AccessPackageRequestState | undefined;
    /** More information on the request processing status. Read-only.  */
    private _status?: string | undefined;
    /**
     * Instantiates a new accessPackageAssignmentRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the accessPackage property value. The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable.  Supports $expand.
     * @returns a accessPackage
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Gets the assignment property value. For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.
     * @returns a accessPackageAssignment
     */
    public get assignment() {
        return this._assignment;
    };
    /**
     * Gets the completedDateTime property value. The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the requestor property value. The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
     * @returns a accessPackageSubject
     */
    public get requestor() {
        return this._requestor;
    };
    /**
     * Gets the requestType property value. The type of the request. The possible values are: notSpecified, userAdd, userUpdate, userRemove, adminAdd, adminUpdate, adminRemove, systemAdd, systemUpdate, systemRemove, onBehalfAdd, unknownFutureValue. A request from the user themselves would have requestType of UserAdd or UserRemove. This property cannot be changed once set.
     * @returns a accessPackageRequestType
     */
    public get requestType() {
        return this._requestType;
    };
    /**
     * Gets the schedule property value. The range of dates that access is to be assigned to the requestor. This property cannot be changed once set.
     * @returns a entitlementManagementSchedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Gets the state property value. The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only.
     * @returns a accessPackageRequestState
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the status property value. More information on the request processing status. Read-only.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accessPackage", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).accessPackage = n.getObjectValue<AccessPackage>(AccessPackage); }],
            ["assignment", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).assignment = n.getObjectValue<AccessPackageAssignment>(AccessPackageAssignment); }],
            ["completedDateTime", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).completedDateTime = n.getDateValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).createdDateTime = n.getDateValue(); }],
            ["requestor", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).requestor = n.getObjectValue<AccessPackageSubject>(AccessPackageSubject); }],
            ["requestType", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).requestType = n.getEnumValue<AccessPackageRequestType>(AccessPackageRequestType); }],
            ["schedule", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).schedule = n.getObjectValue<EntitlementManagementSchedule>(EntitlementManagementSchedule); }],
            ["state", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).state = n.getEnumValue<AccessPackageRequestState>(AccessPackageRequestState); }],
            ["status", (o, n) => { (o as unknown as AccessPackageAssignmentRequest).status = n.getStringValue(); }],
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
        writer.writeObjectValue<AccessPackageAssignment>("assignment", this.assignment);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<AccessPackageSubject>("requestor", this.requestor);
        writer.writeEnumValue<AccessPackageRequestType>("requestType", this.requestType);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", this.schedule);
        writer.writeEnumValue<AccessPackageRequestState>("state", this.state);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Sets the accessPackage property value. The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable.  Supports $expand.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        this._accessPackage = value;
    };
    /**
     * Sets the assignment property value. For a requestType of UserAdd or AdminAdd, this is an access package assignment requested to be created.  For a requestType of UserRemove, AdminRemove or SystemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.
     * @param value Value to set for the assignment property.
     */
    public set assignment(value: AccessPackageAssignment | undefined) {
        this._assignment = value;
    };
    /**
     * Sets the completedDateTime property value. The date of the end of processing, either successful or failure, of a request. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the requestor property value. The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the requestor property.
     */
    public set requestor(value: AccessPackageSubject | undefined) {
        this._requestor = value;
    };
    /**
     * Sets the requestType property value. The type of the request. The possible values are: notSpecified, userAdd, userUpdate, userRemove, adminAdd, adminUpdate, adminRemove, systemAdd, systemUpdate, systemRemove, onBehalfAdd, unknownFutureValue. A request from the user themselves would have requestType of UserAdd or UserRemove. This property cannot be changed once set.
     * @param value Value to set for the requestType property.
     */
    public set requestType(value: AccessPackageRequestType | undefined) {
        this._requestType = value;
    };
    /**
     * Sets the schedule property value. The range of dates that access is to be assigned to the requestor. This property cannot be changed once set.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | undefined) {
        this._schedule = value;
    };
    /**
     * Sets the state property value. The state of the request. The possible values are: submitted, pendingApproval, delivering, delivered, deliveryFailed, denied, scheduled, canceled, partiallyDelivered, unknownFutureValue. Read-only.
     * @param value Value to set for the state property.
     */
    public set state(value: AccessPackageRequestState | undefined) {
        this._state = value;
    };
    /**
     * Sets the status property value. More information on the request processing status. Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
