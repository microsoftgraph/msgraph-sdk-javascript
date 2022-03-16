import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** configuration Manager client enabled features  */
export class ConfigurationManagerClientEnabledFeatures implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Whether compliance policy is managed by Intune  */
    private _compliancePolicy?: boolean | undefined;
    /** Whether device configuration is managed by Intune  */
    private _deviceConfiguration?: boolean | undefined;
    /** Whether inventory is managed by Intune  */
    private _inventory?: boolean | undefined;
    /** Whether modern application is managed by Intune  */
    private _modernApps?: boolean | undefined;
    /** Whether resource access is managed by Intune  */
    private _resourceAccess?: boolean | undefined;
    /** Whether Windows Update for Business is managed by Intune  */
    private _windowsUpdateForBusiness?: boolean | undefined;
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
     * Gets the compliancePolicy property value. Whether compliance policy is managed by Intune
     * @returns a boolean
     */
    public get compliancePolicy() {
        return this._compliancePolicy;
    };
    /**
     * Sets the compliancePolicy property value. Whether compliance policy is managed by Intune
     * @param value Value to set for the compliancePolicy property.
     */
    public set compliancePolicy(value: boolean | undefined) {
        this._compliancePolicy = value;
    };
    /**
     * Instantiates a new configurationManagerClientEnabledFeatures and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the deviceConfiguration property value. Whether device configuration is managed by Intune
     * @returns a boolean
     */
    public get deviceConfiguration() {
        return this._deviceConfiguration;
    };
    /**
     * Sets the deviceConfiguration property value. Whether device configuration is managed by Intune
     * @param value Value to set for the deviceConfiguration property.
     */
    public set deviceConfiguration(value: boolean | undefined) {
        this._deviceConfiguration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["compliancePolicy", (o, n) => { (o as unknown as ConfigurationManagerClientEnabledFeatures).compliancePolicy = n.getBooleanValue(); }],
            ["deviceConfiguration", (o, n) => { (o as unknown as ConfigurationManagerClientEnabledFeatures).deviceConfiguration = n.getBooleanValue(); }],
            ["inventory", (o, n) => { (o as unknown as ConfigurationManagerClientEnabledFeatures).inventory = n.getBooleanValue(); }],
            ["modernApps", (o, n) => { (o as unknown as ConfigurationManagerClientEnabledFeatures).modernApps = n.getBooleanValue(); }],
            ["resourceAccess", (o, n) => { (o as unknown as ConfigurationManagerClientEnabledFeatures).resourceAccess = n.getBooleanValue(); }],
            ["windowsUpdateForBusiness", (o, n) => { (o as unknown as ConfigurationManagerClientEnabledFeatures).windowsUpdateForBusiness = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the inventory property value. Whether inventory is managed by Intune
     * @returns a boolean
     */
    public get inventory() {
        return this._inventory;
    };
    /**
     * Sets the inventory property value. Whether inventory is managed by Intune
     * @param value Value to set for the inventory property.
     */
    public set inventory(value: boolean | undefined) {
        this._inventory = value;
    };
    /**
     * Gets the modernApps property value. Whether modern application is managed by Intune
     * @returns a boolean
     */
    public get modernApps() {
        return this._modernApps;
    };
    /**
     * Sets the modernApps property value. Whether modern application is managed by Intune
     * @param value Value to set for the modernApps property.
     */
    public set modernApps(value: boolean | undefined) {
        this._modernApps = value;
    };
    /**
     * Gets the resourceAccess property value. Whether resource access is managed by Intune
     * @returns a boolean
     */
    public get resourceAccess() {
        return this._resourceAccess;
    };
    /**
     * Sets the resourceAccess property value. Whether resource access is managed by Intune
     * @param value Value to set for the resourceAccess property.
     */
    public set resourceAccess(value: boolean | undefined) {
        this._resourceAccess = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("compliancePolicy", this.compliancePolicy);
        writer.writeBooleanValue("deviceConfiguration", this.deviceConfiguration);
        writer.writeBooleanValue("inventory", this.inventory);
        writer.writeBooleanValue("modernApps", this.modernApps);
        writer.writeBooleanValue("resourceAccess", this.resourceAccess);
        writer.writeBooleanValue("windowsUpdateForBusiness", this.windowsUpdateForBusiness);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the windowsUpdateForBusiness property value. Whether Windows Update for Business is managed by Intune
     * @returns a boolean
     */
    public get windowsUpdateForBusiness() {
        return this._windowsUpdateForBusiness;
    };
    /**
     * Sets the windowsUpdateForBusiness property value. Whether Windows Update for Business is managed by Intune
     * @param value Value to set for the windowsUpdateForBusiness property.
     */
    public set windowsUpdateForBusiness(value: boolean | undefined) {
        this._windowsUpdateForBusiness = value;
    };
}
