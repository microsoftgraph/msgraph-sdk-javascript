import {createAverageComparativeScoreFromDiscriminatorValue} from './createAverageComparativeScoreFromDiscriminatorValue';
import {createControlScoreFromDiscriminatorValue} from './createControlScoreFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {AverageComparativeScore, ControlScore, Entity, SecurityVendorInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScore extends Entity implements Parsable {
    /** Active user count of the given tenant.  */
    private _activeUserCount?: number | undefined;
    /** Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.  */
    private _averageComparativeScores?: AverageComparativeScore[] | undefined;
    /** GUID string for tenant ID.  */
    private _azureTenantId?: string | undefined;
    /** Contains tenant scores for a set of controls.  */
    private _controlScores?: ControlScore[] | undefined;
    /** The date when the entity is created.  */
    private _createdDateTime?: Date | undefined;
    /** Tenant current attained score on specified date.  */
    private _currentScore?: number | undefined;
    /** Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).  */
    private _enabledServices?: string[] | undefined;
    /** Licensed user count of the given tenant.  */
    private _licensedUserCount?: number | undefined;
    /** Tenant maximum possible score on specified date.  */
    private _maxScore?: number | undefined;
    /** Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.  */
    private _vendorInformation?: SecurityVendorInformation | undefined;
    /**
     * Gets the activeUserCount property value. Active user count of the given tenant.
     * @returns a integer
     */
    public get activeUserCount() {
        return this._activeUserCount;
    };
    /**
     * Sets the activeUserCount property value. Active user count of the given tenant.
     * @param value Value to set for the activeUserCount property.
     */
    public set activeUserCount(value: number | undefined) {
        this._activeUserCount = value;
    };
    /**
     * Gets the averageComparativeScores property value. Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
     * @returns a averageComparativeScore
     */
    public get averageComparativeScores() {
        return this._averageComparativeScores;
    };
    /**
     * Sets the averageComparativeScores property value. Average score by different scopes (for example, average by industry, average by seating) and control category (Identity, Data, Device, Apps, Infrastructure) within the scope.
     * @param value Value to set for the averageComparativeScores property.
     */
    public set averageComparativeScores(value: AverageComparativeScore[] | undefined) {
        this._averageComparativeScores = value;
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
     * Instantiates a new secureScore and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the controlScores property value. Contains tenant scores for a set of controls.
     * @returns a controlScore
     */
    public get controlScores() {
        return this._controlScores;
    };
    /**
     * Sets the controlScores property value. Contains tenant scores for a set of controls.
     * @param value Value to set for the controlScores property.
     */
    public set controlScores(value: ControlScore[] | undefined) {
        this._controlScores = value;
    };
    /**
     * Gets the createdDateTime property value. The date when the entity is created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date when the entity is created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the currentScore property value. Tenant current attained score on specified date.
     * @returns a double
     */
    public get currentScore() {
        return this._currentScore;
    };
    /**
     * Sets the currentScore property value. Tenant current attained score on specified date.
     * @param value Value to set for the currentScore property.
     */
    public set currentScore(value: number | undefined) {
        this._currentScore = value;
    };
    /**
     * Gets the enabledServices property value. Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
     * @returns a string
     */
    public get enabledServices() {
        return this._enabledServices;
    };
    /**
     * Sets the enabledServices property value. Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
     * @param value Value to set for the enabledServices property.
     */
    public set enabledServices(value: string[] | undefined) {
        this._enabledServices = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activeUserCount", (o, n) => { (o as unknown as SecureScore).activeUserCount = n.getNumberValue(); }],
            ["averageComparativeScores", (o, n) => { (o as unknown as SecureScore).averageComparativeScores = n.getCollectionOfObjectValues<AverageComparativeScore>(createAverageComparativeScoreFromDiscriminatorValue); }],
            ["azureTenantId", (o, n) => { (o as unknown as SecureScore).azureTenantId = n.getStringValue(); }],
            ["controlScores", (o, n) => { (o as unknown as SecureScore).controlScores = n.getCollectionOfObjectValues<ControlScore>(createControlScoreFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as SecureScore).createdDateTime = n.getDateValue(); }],
            ["currentScore", (o, n) => { (o as unknown as SecureScore).currentScore = n.getNumberValue(); }],
            ["enabledServices", (o, n) => { (o as unknown as SecureScore).enabledServices = n.getCollectionOfPrimitiveValues<string>(); }],
            ["licensedUserCount", (o, n) => { (o as unknown as SecureScore).licensedUserCount = n.getNumberValue(); }],
            ["maxScore", (o, n) => { (o as unknown as SecureScore).maxScore = n.getNumberValue(); }],
            ["vendorInformation", (o, n) => { (o as unknown as SecureScore).vendorInformation = n.getObjectValue<SecurityVendorInformation>(createSecurityVendorInformationFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the licensedUserCount property value. Licensed user count of the given tenant.
     * @returns a integer
     */
    public get licensedUserCount() {
        return this._licensedUserCount;
    };
    /**
     * Sets the licensedUserCount property value. Licensed user count of the given tenant.
     * @param value Value to set for the licensedUserCount property.
     */
    public set licensedUserCount(value: number | undefined) {
        this._licensedUserCount = value;
    };
    /**
     * Gets the maxScore property value. Tenant maximum possible score on specified date.
     * @returns a double
     */
    public get maxScore() {
        return this._maxScore;
    };
    /**
     * Sets the maxScore property value. Tenant maximum possible score on specified date.
     * @param value Value to set for the maxScore property.
     */
    public set maxScore(value: number | undefined) {
        this._maxScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("activeUserCount", this.activeUserCount);
        writer.writeCollectionOfObjectValues<AverageComparativeScore>("averageComparativeScores", this.averageComparativeScores);
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        writer.writeCollectionOfObjectValues<ControlScore>("controlScores", this.controlScores);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeNumberValue("currentScore", this.currentScore);
        writer.writeCollectionOfPrimitiveValues<string>("enabledServices", this.enabledServices);
        writer.writeNumberValue("licensedUserCount", this.licensedUserCount);
        writer.writeNumberValue("maxScore", this.maxScore);
        writer.writeObjectValue<SecurityVendorInformation>("vendorInformation", this.vendorInformation);
    };
    /**
     * Gets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
     * @returns a securityVendorInformation
     */
    public get vendorInformation() {
        return this._vendorInformation;
    };
    /**
     * Sets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=SecureScore). Required.
     * @param value Value to set for the vendorInformation property.
     */
    public set vendorInformation(value: SecurityVendorInformation | undefined) {
        this._vendorInformation = value;
    };
}
