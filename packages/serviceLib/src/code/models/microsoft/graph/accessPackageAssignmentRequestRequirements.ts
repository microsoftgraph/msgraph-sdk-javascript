import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentRequestRequirements implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Indicates whether the requestor is allowed to set a custom schedule.  */
    private _allowCustomAssignmentSchedule?: boolean | undefined;
    /** Indicates whether a request to add must be approved by an approver.  */
    private _isApprovalRequiredForAdd?: boolean | undefined;
    /** Indicates whether a request to update must be approved by an approver.  */
    private _isApprovalRequiredForUpdate?: boolean | undefined;
    /** The description of the policy that the user is trying to request access using.  */
    private _policyDescription?: string | undefined;
    /** The display name of the policy that the user is trying to request access using.  */
    private _policyDisplayName?: string | undefined;
    /** The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request.  */
    private _policyId?: string | undefined;
    /** Schedule restrictions enforced, if any.  */
    private _schedule?: EntitlementManagementSchedule | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowCustomAssignmentSchedule property value. Indicates whether the requestor is allowed to set a custom schedule.
     * @returns a boolean
     */
    public get allowCustomAssignmentSchedule() {
        return this._allowCustomAssignmentSchedule;
    };
    /**
     * Sets the allowCustomAssignmentSchedule property value. Indicates whether the requestor is allowed to set a custom schedule.
     * @param value Value to set for the allowCustomAssignmentSchedule property.
     */
    public set allowCustomAssignmentSchedule(value: boolean | undefined) {
        this._allowCustomAssignmentSchedule = value;
    };
    /**
     * Instantiates a new accessPackageAssignmentRequestRequirements and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowCustomAssignmentSchedule", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).allowCustomAssignmentSchedule = n.getBooleanValue(); }],
            ["isApprovalRequiredForAdd", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).isApprovalRequiredForAdd = n.getBooleanValue(); }],
            ["isApprovalRequiredForUpdate", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).isApprovalRequiredForUpdate = n.getBooleanValue(); }],
            ["policyDescription", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).policyDescription = n.getStringValue(); }],
            ["policyDisplayName", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).policyDisplayName = n.getStringValue(); }],
            ["policyId", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).policyId = n.getStringValue(); }],
            ["schedule", (o, n) => { (o as unknown as AccessPackageAssignmentRequestRequirements).schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the isApprovalRequiredForAdd property value. Indicates whether a request to add must be approved by an approver.
     * @returns a boolean
     */
    public get isApprovalRequiredForAdd() {
        return this._isApprovalRequiredForAdd;
    };
    /**
     * Sets the isApprovalRequiredForAdd property value. Indicates whether a request to add must be approved by an approver.
     * @param value Value to set for the isApprovalRequiredForAdd property.
     */
    public set isApprovalRequiredForAdd(value: boolean | undefined) {
        this._isApprovalRequiredForAdd = value;
    };
    /**
     * Gets the isApprovalRequiredForUpdate property value. Indicates whether a request to update must be approved by an approver.
     * @returns a boolean
     */
    public get isApprovalRequiredForUpdate() {
        return this._isApprovalRequiredForUpdate;
    };
    /**
     * Sets the isApprovalRequiredForUpdate property value. Indicates whether a request to update must be approved by an approver.
     * @param value Value to set for the isApprovalRequiredForUpdate property.
     */
    public set isApprovalRequiredForUpdate(value: boolean | undefined) {
        this._isApprovalRequiredForUpdate = value;
    };
    /**
     * Gets the policyDescription property value. The description of the policy that the user is trying to request access using.
     * @returns a string
     */
    public get policyDescription() {
        return this._policyDescription;
    };
    /**
     * Sets the policyDescription property value. The description of the policy that the user is trying to request access using.
     * @param value Value to set for the policyDescription property.
     */
    public set policyDescription(value: string | undefined) {
        this._policyDescription = value;
    };
    /**
     * Gets the policyDisplayName property value. The display name of the policy that the user is trying to request access using.
     * @returns a string
     */
    public get policyDisplayName() {
        return this._policyDisplayName;
    };
    /**
     * Sets the policyDisplayName property value. The display name of the policy that the user is trying to request access using.
     * @param value Value to set for the policyDisplayName property.
     */
    public set policyDisplayName(value: string | undefined) {
        this._policyDisplayName = value;
    };
    /**
     * Gets the policyId property value. The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request.
     * @returns a string
     */
    public get policyId() {
        return this._policyId;
    };
    /**
     * Sets the policyId property value. The identifier of the policy that these requirements are associated with. This identifier can be used when creating a new assignment request.
     * @param value Value to set for the policyId property.
     */
    public set policyId(value: string | undefined) {
        this._policyId = value;
    };
    /**
     * Gets the schedule property value. Schedule restrictions enforced, if any.
     * @returns a entitlementManagementSchedule
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. Schedule restrictions enforced, if any.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: EntitlementManagementSchedule | undefined) {
        this._schedule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowCustomAssignmentSchedule", this.allowCustomAssignmentSchedule);
        writer.writeBooleanValue("isApprovalRequiredForAdd", this.isApprovalRequiredForAdd);
        writer.writeBooleanValue("isApprovalRequiredForUpdate", this.isApprovalRequiredForUpdate);
        writer.writeStringValue("policyDescription", this.policyDescription);
        writer.writeStringValue("policyDisplayName", this.policyDisplayName);
        writer.writeStringValue("policyId", this.policyId);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", this.schedule);
        writer.writeAdditionalData(this.additionalData);
    };
}
