import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedPlan implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _assignedDateTime?: Date | undefined;
    /** Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value.  */
    private _capabilityStatus?: string | undefined;
    /** The name of the service; for example, 'Exchange'.  */
    private _service?: string | undefined;
    /** A GUID that identifies the service plan.  */
    private _servicePlanId?: string | undefined;
    /**
     * Instantiates a new assignedPlan and sets the default values.
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
     * Gets the assignedDateTime property value. The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get assignedDateTime() {
        return this._assignedDateTime;
    };
    /**
     * Gets the capabilityStatus property value. Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value.
     * @returns a string
     */
    public get capabilityStatus() {
        return this._capabilityStatus;
    };
    /**
     * Gets the service property value. The name of the service; for example, 'Exchange'.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Gets the servicePlanId property value. A GUID that identifies the service plan.
     * @returns a string
     */
    public get servicePlanId() {
        return this._servicePlanId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["assignedDateTime", (o, n) => { (o as unknown as AssignedPlan).assignedDateTime = n.getDateValue(); }],
            ["capabilityStatus", (o, n) => { (o as unknown as AssignedPlan).capabilityStatus = n.getStringValue(); }],
            ["service", (o, n) => { (o as unknown as AssignedPlan).service = n.getStringValue(); }],
            ["servicePlanId", (o, n) => { (o as unknown as AssignedPlan).servicePlanId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeStringValue("service", this.service);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
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
     * Sets the assignedDateTime property value. The date and time at which the plan was assigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the assignedDateTime property.
     */
    public set assignedDateTime(value: Date | undefined) {
        this._assignedDateTime = value;
    };
    /**
     * Sets the capabilityStatus property value. Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut. See a detailed description of each value.
     * @param value Value to set for the capabilityStatus property.
     */
    public set capabilityStatus(value: string | undefined) {
        this._capabilityStatus = value;
    };
    /**
     * Sets the service property value. The name of the service; for example, 'Exchange'.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Sets the servicePlanId property value. A GUID that identifies the service plan.
     * @param value Value to set for the servicePlanId property.
     */
    public set servicePlanId(value: string | undefined) {
        this._servicePlanId = value;
    };
}
