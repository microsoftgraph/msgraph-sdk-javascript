import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseAssignmentState implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null. Read-Only.  */
    private _assignedByGroup?: string | undefined;
    /** The service plans that are disabled in this assignment. Read-Only.  */
    private _disabledPlans?: string[] | undefined;
    /** License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. The possible values are CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Other. For more information on how to identify and resolve license assignment errors see here.  */
    private _error_escaped?: string | undefined;
    /** The timestamp when the state of the license assignment was last updated.  */
    private _lastUpdatedDateTime?: Date | undefined;
    /** The unique identifier for the SKU. Read-Only.  */
    private _skuId?: string | undefined;
    /** Indicate the current state of this assignment. Read-Only. The possible values are Active, ActiveWithError, Disabled, and Error.  */
    private _state?: string | undefined;
    /**
     * Instantiates a new licenseAssignmentState and sets the default values.
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
     * Gets the assignedByGroup property value. The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null. Read-Only.
     * @returns a string
     */
    public get assignedByGroup() {
        return this._assignedByGroup;
    };
    /**
     * Gets the disabledPlans property value. The service plans that are disabled in this assignment. Read-Only.
     * @returns a string
     */
    public get disabledPlans() {
        return this._disabledPlans;
    };
    /**
     * Gets the error property value. License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. The possible values are CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Other. For more information on how to identify and resolve license assignment errors see here.
     * @returns a string
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Gets the lastUpdatedDateTime property value. The timestamp when the state of the license assignment was last updated.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Gets the skuId property value. The unique identifier for the SKU. Read-Only.
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Gets the state property value. Indicate the current state of this assignment. Read-Only. The possible values are Active, ActiveWithError, Disabled, and Error.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["assignedByGroup", (o, n) => { (o as unknown as LicenseAssignmentState).assignedByGroup = n.getStringValue(); }],
            ["disabledPlans", (o, n) => { (o as unknown as LicenseAssignmentState).disabledPlans = n.getCollectionOfPrimitiveValues<string>(); }],
            ["error", (o, n) => { (o as unknown as LicenseAssignmentState).error_escaped = n.getStringValue(); }],
            ["lastUpdatedDateTime", (o, n) => { (o as unknown as LicenseAssignmentState).lastUpdatedDateTime = n.getDateValue(); }],
            ["skuId", (o, n) => { (o as unknown as LicenseAssignmentState).skuId = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as LicenseAssignmentState).state = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("assignedByGroup", this.assignedByGroup);
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", this.disabledPlans);
        writer.writeStringValue("error", this.error_escaped);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("state", this.state);
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
     * Sets the assignedByGroup property value. The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null. Read-Only.
     * @param value Value to set for the assignedByGroup property.
     */
    public set assignedByGroup(value: string | undefined) {
        this._assignedByGroup = value;
    };
    /**
     * Sets the disabledPlans property value. The service plans that are disabled in this assignment. Read-Only.
     * @param value Value to set for the disabledPlans property.
     */
    public set disabledPlans(value: string[] | undefined) {
        this._disabledPlans = value;
    };
    /**
     * Sets the error property value. License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. The possible values are CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Other. For more information on how to identify and resolve license assignment errors see here.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: string | undefined) {
        this._error_escaped = value;
    };
    /**
     * Sets the lastUpdatedDateTime property value. The timestamp when the state of the license assignment was last updated.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Sets the skuId property value. The unique identifier for the SKU. Read-Only.
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
    /**
     * Sets the state property value. Indicate the current state of this assignment. Read-Only. The possible values are Active, ActiveWithError, Disabled, and Error.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
}
