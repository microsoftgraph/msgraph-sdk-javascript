import {createComplianceInformationFromDiscriminatorValue} from './createComplianceInformationFromDiscriminatorValue';
import {createSecureScoreControlStateUpdateFromDiscriminatorValue} from './createSecureScoreControlStateUpdateFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {ComplianceInformation, Entity, SecureScoreControlStateUpdate, SecurityVendorInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreControlProfile extends Entity implements Parsable {
    /** Control action type (Config, Review, Behavior).  */
    private _actionType?: string | undefined;
    /** URL to where the control can be actioned.  */
    private _actionUrl?: string | undefined;
    /** GUID string for tenant ID.  */
    private _azureTenantId?: string | undefined;
    /** The collection of compliance information associated with secure score control  */
    private _complianceInformation?: ComplianceInformation[] | undefined;
    /** Control action category (Identity, Data, Device, Apps, Infrastructure).  */
    private _controlCategory?: string | undefined;
    /** Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update).  */
    private _controlStateUpdates?: SecureScoreControlStateUpdate[] | undefined;
    /** Flag to indicate if a control is depreciated.  */
    private _deprecated?: boolean | undefined;
    /** Resource cost of implemmentating control (low, moderate, high).  */
    private _implementationCost?: string | undefined;
    /** Time at which the control profile entity was last modified. The Timestamp type represents date and time  */
    private _lastModifiedDateTime?: Date | undefined;
    /** max attainable score for the control.  */
    private _maxScore?: number | undefined;
    /** Microsoft's stack ranking of control.  */
    private _rank?: number | undefined;
    /** Description of what the control will help remediate.  */
    private _remediation?: string | undefined;
    /** Description of the impact on users of the remediation.  */
    private _remediationImpact?: string | undefined;
    /** Service that owns the control (Exchange, Sharepoint, Azure AD).  */
    private _service?: string | undefined;
    /** List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,  */
    private _threats?: string[] | undefined;
    /** Control tier (Core, Defense in Depth, Advanced.)  */
    private _tier?: string | undefined;
    /** Title of the control.  */
    private _title?: string | undefined;
    /** User impact of implementing control (low, moderate, high).  */
    private _userImpact?: string | undefined;
    private _vendorInformation?: SecurityVendorInformation | undefined;
    /**
     * Gets the actionType property value. Control action type (Config, Review, Behavior).
     * @returns a string
     */
    public get actionType() {
        return this._actionType;
    };
    /**
     * Sets the actionType property value. Control action type (Config, Review, Behavior).
     * @param value Value to set for the actionType property.
     */
    public set actionType(value: string | undefined) {
        this._actionType = value;
    };
    /**
     * Gets the actionUrl property value. URL to where the control can be actioned.
     * @returns a string
     */
    public get actionUrl() {
        return this._actionUrl;
    };
    /**
     * Sets the actionUrl property value. URL to where the control can be actioned.
     * @param value Value to set for the actionUrl property.
     */
    public set actionUrl(value: string | undefined) {
        this._actionUrl = value;
    };
    /**
     * Gets the azureTenantId property value. GUID string for tenant ID.
     * @returns a string
     */
    public get azureTenantId() {
        return this._azureTenantId;
    };
    /**
     * Sets the azureTenantId property value. GUID string for tenant ID.
     * @param value Value to set for the azureTenantId property.
     */
    public set azureTenantId(value: string | undefined) {
        this._azureTenantId = value;
    };
    /**
     * Gets the complianceInformation property value. The collection of compliance information associated with secure score control
     * @returns a complianceInformation
     */
    public get complianceInformation() {
        return this._complianceInformation;
    };
    /**
     * Sets the complianceInformation property value. The collection of compliance information associated with secure score control
     * @param value Value to set for the complianceInformation property.
     */
    public set complianceInformation(value: ComplianceInformation[] | undefined) {
        this._complianceInformation = value;
    };
    /**
     * Instantiates a new secureScoreControlProfile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the controlCategory property value. Control action category (Identity, Data, Device, Apps, Infrastructure).
     * @returns a string
     */
    public get controlCategory() {
        return this._controlCategory;
    };
    /**
     * Sets the controlCategory property value. Control action category (Identity, Data, Device, Apps, Infrastructure).
     * @param value Value to set for the controlCategory property.
     */
    public set controlCategory(value: string | undefined) {
        this._controlCategory = value;
    };
    /**
     * Gets the controlStateUpdates property value. Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update).
     * @returns a secureScoreControlStateUpdate
     */
    public get controlStateUpdates() {
        return this._controlStateUpdates;
    };
    /**
     * Sets the controlStateUpdates property value. Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update).
     * @param value Value to set for the controlStateUpdates property.
     */
    public set controlStateUpdates(value: SecureScoreControlStateUpdate[] | undefined) {
        this._controlStateUpdates = value;
    };
    /**
     * Gets the deprecated property value. Flag to indicate if a control is depreciated.
     * @returns a boolean
     */
    public get deprecated() {
        return this._deprecated;
    };
    /**
     * Sets the deprecated property value. Flag to indicate if a control is depreciated.
     * @param value Value to set for the deprecated property.
     */
    public set deprecated(value: boolean | undefined) {
        this._deprecated = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["actionType", (o, n) => { (o as unknown as SecureScoreControlProfile).actionType = n.getStringValue(); }],
            ["actionUrl", (o, n) => { (o as unknown as SecureScoreControlProfile).actionUrl = n.getStringValue(); }],
            ["azureTenantId", (o, n) => { (o as unknown as SecureScoreControlProfile).azureTenantId = n.getStringValue(); }],
            ["complianceInformation", (o, n) => { (o as unknown as SecureScoreControlProfile).complianceInformation = n.getCollectionOfObjectValues<ComplianceInformation>(createComplianceInformationFromDiscriminatorValue); }],
            ["controlCategory", (o, n) => { (o as unknown as SecureScoreControlProfile).controlCategory = n.getStringValue(); }],
            ["controlStateUpdates", (o, n) => { (o as unknown as SecureScoreControlProfile).controlStateUpdates = n.getCollectionOfObjectValues<SecureScoreControlStateUpdate>(createSecureScoreControlStateUpdateFromDiscriminatorValue); }],
            ["deprecated", (o, n) => { (o as unknown as SecureScoreControlProfile).deprecated = n.getBooleanValue(); }],
            ["implementationCost", (o, n) => { (o as unknown as SecureScoreControlProfile).implementationCost = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as SecureScoreControlProfile).lastModifiedDateTime = n.getDateValue(); }],
            ["maxScore", (o, n) => { (o as unknown as SecureScoreControlProfile).maxScore = n.getNumberValue(); }],
            ["rank", (o, n) => { (o as unknown as SecureScoreControlProfile).rank = n.getNumberValue(); }],
            ["remediation", (o, n) => { (o as unknown as SecureScoreControlProfile).remediation = n.getStringValue(); }],
            ["remediationImpact", (o, n) => { (o as unknown as SecureScoreControlProfile).remediationImpact = n.getStringValue(); }],
            ["service", (o, n) => { (o as unknown as SecureScoreControlProfile).service = n.getStringValue(); }],
            ["threats", (o, n) => { (o as unknown as SecureScoreControlProfile).threats = n.getCollectionOfPrimitiveValues<string>(); }],
            ["tier", (o, n) => { (o as unknown as SecureScoreControlProfile).tier = n.getStringValue(); }],
            ["title", (o, n) => { (o as unknown as SecureScoreControlProfile).title = n.getStringValue(); }],
            ["userImpact", (o, n) => { (o as unknown as SecureScoreControlProfile).userImpact = n.getStringValue(); }],
            ["vendorInformation", (o, n) => { (o as unknown as SecureScoreControlProfile).vendorInformation = n.getObjectValue<SecurityVendorInformation>(createSecurityVendorInformationFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the implementationCost property value. Resource cost of implemmentating control (low, moderate, high).
     * @returns a string
     */
    public get implementationCost() {
        return this._implementationCost;
    };
    /**
     * Sets the implementationCost property value. Resource cost of implemmentating control (low, moderate, high).
     * @param value Value to set for the implementationCost property.
     */
    public set implementationCost(value: string | undefined) {
        this._implementationCost = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Time at which the control profile entity was last modified. The Timestamp type represents date and time
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Time at which the control profile entity was last modified. The Timestamp type represents date and time
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the maxScore property value. max attainable score for the control.
     * @returns a double
     */
    public get maxScore() {
        return this._maxScore;
    };
    /**
     * Sets the maxScore property value. max attainable score for the control.
     * @param value Value to set for the maxScore property.
     */
    public set maxScore(value: number | undefined) {
        this._maxScore = value;
    };
    /**
     * Gets the rank property value. Microsoft's stack ranking of control.
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. Microsoft's stack ranking of control.
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Gets the remediation property value. Description of what the control will help remediate.
     * @returns a string
     */
    public get remediation() {
        return this._remediation;
    };
    /**
     * Sets the remediation property value. Description of what the control will help remediate.
     * @param value Value to set for the remediation property.
     */
    public set remediation(value: string | undefined) {
        this._remediation = value;
    };
    /**
     * Gets the remediationImpact property value. Description of the impact on users of the remediation.
     * @returns a string
     */
    public get remediationImpact() {
        return this._remediationImpact;
    };
    /**
     * Sets the remediationImpact property value. Description of the impact on users of the remediation.
     * @param value Value to set for the remediationImpact property.
     */
    public set remediationImpact(value: string | undefined) {
        this._remediationImpact = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("actionType", this.actionType);
        writer.writeStringValue("actionUrl", this.actionUrl);
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        writer.writeCollectionOfObjectValues<ComplianceInformation>("complianceInformation", this.complianceInformation);
        writer.writeStringValue("controlCategory", this.controlCategory);
        writer.writeCollectionOfObjectValues<SecureScoreControlStateUpdate>("controlStateUpdates", this.controlStateUpdates);
        writer.writeBooleanValue("deprecated", this.deprecated);
        writer.writeStringValue("implementationCost", this.implementationCost);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("maxScore", this.maxScore);
        writer.writeNumberValue("rank", this.rank);
        writer.writeStringValue("remediation", this.remediation);
        writer.writeStringValue("remediationImpact", this.remediationImpact);
        writer.writeStringValue("service", this.service);
        writer.writeCollectionOfPrimitiveValues<string>("threats", this.threats);
        writer.writeStringValue("tier", this.tier);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("userImpact", this.userImpact);
        writer.writeObjectValue<SecurityVendorInformation>("vendorInformation", this.vendorInformation);
    };
    /**
     * Gets the service property value. Service that owns the control (Exchange, Sharepoint, Azure AD).
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. Service that owns the control (Exchange, Sharepoint, Azure AD).
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Gets the threats property value. List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,
     * @returns a string
     */
    public get threats() {
        return this._threats;
    };
    /**
     * Sets the threats property value. List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,
     * @param value Value to set for the threats property.
     */
    public set threats(value: string[] | undefined) {
        this._threats = value;
    };
    /**
     * Gets the tier property value. Control tier (Core, Defense in Depth, Advanced.)
     * @returns a string
     */
    public get tier() {
        return this._tier;
    };
    /**
     * Sets the tier property value. Control tier (Core, Defense in Depth, Advanced.)
     * @param value Value to set for the tier property.
     */
    public set tier(value: string | undefined) {
        this._tier = value;
    };
    /**
     * Gets the title property value. Title of the control.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Title of the control.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the userImpact property value. User impact of implementing control (low, moderate, high).
     * @returns a string
     */
    public get userImpact() {
        return this._userImpact;
    };
    /**
     * Sets the userImpact property value. User impact of implementing control (low, moderate, high).
     * @param value Value to set for the userImpact property.
     */
    public set userImpact(value: string | undefined) {
        this._userImpact = value;
    };
    /**
     * Gets the vendorInformation property value. 
     * @returns a securityVendorInformation
     */
    public get vendorInformation() {
        return this._vendorInformation;
    };
    /**
     * Sets the vendorInformation property value. 
     * @param value Value to set for the vendorInformation property.
     */
    public set vendorInformation(value: SecurityVendorInformation | undefined) {
        this._vendorInformation = value;
    };
}
