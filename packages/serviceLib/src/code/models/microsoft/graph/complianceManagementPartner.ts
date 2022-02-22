import {ComplianceManagementPartnerAssignment, DeviceManagementPartnerTenantState, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceManagementPartner extends Entity implements Parsable {
    /** User groups which enroll Android devices through partner.  */
    private _androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for Android devices.  */
    private _androidOnboarded?: boolean | undefined;
    /** Partner display name  */
    private _displayName?: string | undefined;
    /** User groups which enroll ios devices through partner.  */
    private _iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for ios devices.  */
    private _iosOnboarded?: boolean | undefined;
    /** Timestamp of last heartbeat after admin onboarded to the compliance management partner  */
    private _lastHeartbeatDateTime?: Date | undefined;
    /** User groups which enroll Mac devices through partner.  */
    private _macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for Mac devices.  */
    private _macOsOnboarded?: boolean | undefined;
    /** Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.  */
    private _partnerState?: DeviceManagementPartnerTenantState | undefined;
    /**
     * Instantiates a new complianceManagementPartner and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the androidEnrollmentAssignments property value. User groups which enroll Android devices through partner.
     * @returns a complianceManagementPartnerAssignment
     */
    public get androidEnrollmentAssignments() {
        return this._androidEnrollmentAssignments;
    };
    /**
     * Gets the androidOnboarded property value. Partner onboarded for Android devices.
     * @returns a boolean
     */
    public get androidOnboarded() {
        return this._androidOnboarded;
    };
    /**
     * Gets the displayName property value. Partner display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the iosEnrollmentAssignments property value. User groups which enroll ios devices through partner.
     * @returns a complianceManagementPartnerAssignment
     */
    public get iosEnrollmentAssignments() {
        return this._iosEnrollmentAssignments;
    };
    /**
     * Gets the iosOnboarded property value. Partner onboarded for ios devices.
     * @returns a boolean
     */
    public get iosOnboarded() {
        return this._iosOnboarded;
    };
    /**
     * Gets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin onboarded to the compliance management partner
     * @returns a Date
     */
    public get lastHeartbeatDateTime() {
        return this._lastHeartbeatDateTime;
    };
    /**
     * Gets the macOsEnrollmentAssignments property value. User groups which enroll Mac devices through partner.
     * @returns a complianceManagementPartnerAssignment
     */
    public get macOsEnrollmentAssignments() {
        return this._macOsEnrollmentAssignments;
    };
    /**
     * Gets the macOsOnboarded property value. Partner onboarded for Mac devices.
     * @returns a boolean
     */
    public get macOsOnboarded() {
        return this._macOsOnboarded;
    };
    /**
     * Gets the partnerState property value. Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
     * @returns a deviceManagementPartnerTenantState
     */
    public get partnerState() {
        return this._partnerState;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["androidEnrollmentAssignments", (o, n) => { (o as unknown as ComplianceManagementPartner).androidEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignment>(ComplianceManagementPartnerAssignment); }],
            ["androidOnboarded", (o, n) => { (o as unknown as ComplianceManagementPartner).androidOnboarded = n.getBooleanValue(); }],
            ["displayName", (o, n) => { (o as unknown as ComplianceManagementPartner).displayName = n.getStringValue(); }],
            ["iosEnrollmentAssignments", (o, n) => { (o as unknown as ComplianceManagementPartner).iosEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignment>(ComplianceManagementPartnerAssignment); }],
            ["iosOnboarded", (o, n) => { (o as unknown as ComplianceManagementPartner).iosOnboarded = n.getBooleanValue(); }],
            ["lastHeartbeatDateTime", (o, n) => { (o as unknown as ComplianceManagementPartner).lastHeartbeatDateTime = n.getDateValue(); }],
            ["macOsEnrollmentAssignments", (o, n) => { (o as unknown as ComplianceManagementPartner).macOsEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignment>(ComplianceManagementPartnerAssignment); }],
            ["macOsOnboarded", (o, n) => { (o as unknown as ComplianceManagementPartner).macOsOnboarded = n.getBooleanValue(); }],
            ["partnerState", (o, n) => { (o as unknown as ComplianceManagementPartner).partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignment>("androidEnrollmentAssignments", this.androidEnrollmentAssignments);
        writer.writeBooleanValue("androidOnboarded", this.androidOnboarded);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignment>("iosEnrollmentAssignments", this.iosEnrollmentAssignments);
        writer.writeBooleanValue("iosOnboarded", this.iosOnboarded);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignment>("macOsEnrollmentAssignments", this.macOsEnrollmentAssignments);
        writer.writeBooleanValue("macOsOnboarded", this.macOsOnboarded);
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", this.partnerState);
    };
    /**
     * Sets the androidEnrollmentAssignments property value. User groups which enroll Android devices through partner.
     * @param value Value to set for the androidEnrollmentAssignments property.
     */
    public set androidEnrollmentAssignments(value: ComplianceManagementPartnerAssignment[] | undefined) {
        this._androidEnrollmentAssignments = value;
    };
    /**
     * Sets the androidOnboarded property value. Partner onboarded for Android devices.
     * @param value Value to set for the androidOnboarded property.
     */
    public set androidOnboarded(value: boolean | undefined) {
        this._androidOnboarded = value;
    };
    /**
     * Sets the displayName property value. Partner display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the iosEnrollmentAssignments property value. User groups which enroll ios devices through partner.
     * @param value Value to set for the iosEnrollmentAssignments property.
     */
    public set iosEnrollmentAssignments(value: ComplianceManagementPartnerAssignment[] | undefined) {
        this._iosEnrollmentAssignments = value;
    };
    /**
     * Sets the iosOnboarded property value. Partner onboarded for ios devices.
     * @param value Value to set for the iosOnboarded property.
     */
    public set iosOnboarded(value: boolean | undefined) {
        this._iosOnboarded = value;
    };
    /**
     * Sets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin onboarded to the compliance management partner
     * @param value Value to set for the lastHeartbeatDateTime property.
     */
    public set lastHeartbeatDateTime(value: Date | undefined) {
        this._lastHeartbeatDateTime = value;
    };
    /**
     * Sets the macOsEnrollmentAssignments property value. User groups which enroll Mac devices through partner.
     * @param value Value to set for the macOsEnrollmentAssignments property.
     */
    public set macOsEnrollmentAssignments(value: ComplianceManagementPartnerAssignment[] | undefined) {
        this._macOsEnrollmentAssignments = value;
    };
    /**
     * Sets the macOsOnboarded property value. Partner onboarded for Mac devices.
     * @param value Value to set for the macOsOnboarded property.
     */
    public set macOsOnboarded(value: boolean | undefined) {
        this._macOsOnboarded = value;
    };
    /**
     * Sets the partnerState property value. Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
     * @param value Value to set for the partnerState property.
     */
    public set partnerState(value: DeviceManagementPartnerTenantState | undefined) {
        this._partnerState = value;
    };
}
