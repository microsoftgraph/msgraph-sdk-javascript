import {createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue';
import {Entity, ManagedAppPolicyDeploymentSummaryPerApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppPolicyDeploymentSummary extends Entity implements Parsable {
    /** Not yet documented  */
    private _configurationDeployedUserCount?: number | undefined;
    /** Not yet documented  */
    private _configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined;
    /** Not yet documented  */
    private _displayName?: string | undefined;
    /** Not yet documented  */
    private _lastRefreshTime?: Date | undefined;
    /** Version of the entity.  */
    private _version?: string | undefined;
    /**
     * Gets the configurationDeployedUserCount property value. Not yet documented
     * @returns a integer
     */
    public get configurationDeployedUserCount() {
        return this._configurationDeployedUserCount;
    };
    /**
     * Sets the configurationDeployedUserCount property value. Not yet documented
     * @param value Value to set for the configurationDeployedUserCount property.
     */
    public set configurationDeployedUserCount(value: number | undefined) {
        this._configurationDeployedUserCount = value;
    };
    /**
     * Gets the configurationDeploymentSummaryPerApp property value. Not yet documented
     * @returns a managedAppPolicyDeploymentSummaryPerApp
     */
    public get configurationDeploymentSummaryPerApp() {
        return this._configurationDeploymentSummaryPerApp;
    };
    /**
     * Sets the configurationDeploymentSummaryPerApp property value. Not yet documented
     * @param value Value to set for the configurationDeploymentSummaryPerApp property.
     */
    public set configurationDeploymentSummaryPerApp(value: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined) {
        this._configurationDeploymentSummaryPerApp = value;
    };
    /**
     * Instantiates a new managedAppPolicyDeploymentSummary and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Not yet documented
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Not yet documented
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["configurationDeployedUserCount", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummary).configurationDeployedUserCount = n.getNumberValue(); }],
            ["configurationDeploymentSummaryPerApp", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummary).configurationDeploymentSummaryPerApp = n.getCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerApp>(createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummary).displayName = n.getStringValue(); }],
            ["lastRefreshTime", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummary).lastRefreshTime = n.getDateValue(); }],
            ["version", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummary).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the lastRefreshTime property value. Not yet documented
     * @returns a Date
     */
    public get lastRefreshTime() {
        return this._lastRefreshTime;
    };
    /**
     * Sets the lastRefreshTime property value. Not yet documented
     * @param value Value to set for the lastRefreshTime property.
     */
    public set lastRefreshTime(value: Date | undefined) {
        this._lastRefreshTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("configurationDeployedUserCount", this.configurationDeployedUserCount);
        writer.writeCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerApp>("configurationDeploymentSummaryPerApp", this.configurationDeploymentSummaryPerApp);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastRefreshTime", this.lastRefreshTime);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
