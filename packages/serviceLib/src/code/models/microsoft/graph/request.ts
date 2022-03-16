import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Request extends Entity implements Parsable {
    /** The identifier of the approval of the request.  */
    private _approvalId?: string | undefined;
    /** The request completion date time.  */
    private _completedDateTime?: Date | undefined;
    /** The user who created this request.  */
    private _createdBy?: IdentitySet | undefined;
    /** The request creation date time.  */
    private _createdDateTime?: Date | undefined;
    /** Free text field to define any custom data for the request. Not used.  */
    private _customData?: string | undefined;
    /** The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.  */
    private _status?: string | undefined;
    /**
     * Gets the approvalId property value. The identifier of the approval of the request.
     * @returns a string
     */
    public get approvalId() {
        return this._approvalId;
    };
    /**
     * Sets the approvalId property value. The identifier of the approval of the request.
     * @param value Value to set for the approvalId property.
     */
    public set approvalId(value: string | undefined) {
        this._approvalId = value;
    };
    /**
     * Gets the completedDateTime property value. The request completion date time.
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The request completion date time.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Instantiates a new request and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The user who created this request.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user who created this request.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The request creation date time.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The request creation date time.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the customData property value. Free text field to define any custom data for the request. Not used.
     * @returns a string
     */
    public get customData() {
        return this._customData;
    };
    /**
     * Sets the customData property value. Free text field to define any custom data for the request. Not used.
     * @param value Value to set for the customData property.
     */
    public set customData(value: string | undefined) {
        this._customData = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["approvalId", (o, n) => { (o as unknown as Request).approvalId = n.getStringValue(); }],
            ["completedDateTime", (o, n) => { (o as unknown as Request).completedDateTime = n.getDateValue(); }],
            ["createdBy", (o, n) => { (o as unknown as Request).createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as Request).createdDateTime = n.getDateValue(); }],
            ["customData", (o, n) => { (o as unknown as Request).customData = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as Request).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("approvalId", this.approvalId);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("customData", this.customData);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the status property value. The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the request. Not nullable. The possible values are: Canceled, Denied, Failed, Granted, PendingAdminDecision, PendingApproval, PendingProvisioning, PendingScheduleCreation, Provisioned, Revoked, and ScheduleCreated. Not nullable.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
