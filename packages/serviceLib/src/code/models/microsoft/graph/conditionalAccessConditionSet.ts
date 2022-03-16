import {ConditionalAccessClientApp} from './conditionalAccessClientApp';
import {createConditionalAccessApplicationsFromDiscriminatorValue} from './createConditionalAccessApplicationsFromDiscriminatorValue';
import {createConditionalAccessDevicesFromDiscriminatorValue} from './createConditionalAccessDevicesFromDiscriminatorValue';
import {createConditionalAccessLocationsFromDiscriminatorValue} from './createConditionalAccessLocationsFromDiscriminatorValue';
import {createConditionalAccessPlatformsFromDiscriminatorValue} from './createConditionalAccessPlatformsFromDiscriminatorValue';
import {createConditionalAccessUsersFromDiscriminatorValue} from './createConditionalAccessUsersFromDiscriminatorValue';
import {ConditionalAccessApplications, ConditionalAccessDevices, ConditionalAccessLocations, ConditionalAccessPlatforms, ConditionalAccessUsers} from './index';
import {RiskLevel} from './riskLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessConditionSet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Applications and user actions included in and excluded from the policy. Required.  */
    private _applications?: ConditionalAccessApplications | undefined;
    /** Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.  */
    private _clientAppTypes?: ConditionalAccessClientApp[] | undefined;
    /** Devices in the policy.  */
    private _devices?: ConditionalAccessDevices | undefined;
    /** Locations included in and excluded from the policy.  */
    private _locations?: ConditionalAccessLocations | undefined;
    /** Platforms included in and excluded from the policy.  */
    private _platforms?: ConditionalAccessPlatforms | undefined;
    /** Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.  */
    private _signInRiskLevels?: RiskLevel[] | undefined;
    /** User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.  */
    private _userRiskLevels?: RiskLevel[] | undefined;
    private _users?: ConditionalAccessUsers | undefined;
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
     * Gets the applications property value. Applications and user actions included in and excluded from the policy. Required.
     * @returns a conditionalAccessApplications
     */
    public get applications() {
        return this._applications;
    };
    /**
     * Sets the applications property value. Applications and user actions included in and excluded from the policy. Required.
     * @param value Value to set for the applications property.
     */
    public set applications(value: ConditionalAccessApplications | undefined) {
        this._applications = value;
    };
    /**
     * Gets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
     * @returns a conditionalAccessClientApp
     */
    public get clientAppTypes() {
        return this._clientAppTypes;
    };
    /**
     * Sets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
     * @param value Value to set for the clientAppTypes property.
     */
    public set clientAppTypes(value: ConditionalAccessClientApp[] | undefined) {
        this._clientAppTypes = value;
    };
    /**
     * Instantiates a new conditionalAccessConditionSet and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the devices property value. Devices in the policy.
     * @returns a conditionalAccessDevices
     */
    public get devices() {
        return this._devices;
    };
    /**
     * Sets the devices property value. Devices in the policy.
     * @param value Value to set for the devices property.
     */
    public set devices(value: ConditionalAccessDevices | undefined) {
        this._devices = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["applications", (o, n) => { (o as unknown as ConditionalAccessConditionSet).applications = n.getObjectValue<ConditionalAccessApplications>(createConditionalAccessApplicationsFromDiscriminatorValue); }],
            ["clientAppTypes", (o, n) => { (o as unknown as ConditionalAccessConditionSet).clientAppTypes = n.getEnumValues<ConditionalAccessClientApp>(ConditionalAccessClientApp); }],
            ["devices", (o, n) => { (o as unknown as ConditionalAccessConditionSet).devices = n.getObjectValue<ConditionalAccessDevices>(createConditionalAccessDevicesFromDiscriminatorValue); }],
            ["locations", (o, n) => { (o as unknown as ConditionalAccessConditionSet).locations = n.getObjectValue<ConditionalAccessLocations>(createConditionalAccessLocationsFromDiscriminatorValue); }],
            ["platforms", (o, n) => { (o as unknown as ConditionalAccessConditionSet).platforms = n.getObjectValue<ConditionalAccessPlatforms>(createConditionalAccessPlatformsFromDiscriminatorValue); }],
            ["signInRiskLevels", (o, n) => { (o as unknown as ConditionalAccessConditionSet).signInRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel); }],
            ["userRiskLevels", (o, n) => { (o as unknown as ConditionalAccessConditionSet).userRiskLevels = n.getEnumValues<RiskLevel>(RiskLevel); }],
            ["users", (o, n) => { (o as unknown as ConditionalAccessConditionSet).users = n.getObjectValue<ConditionalAccessUsers>(createConditionalAccessUsersFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the locations property value. Locations included in and excluded from the policy.
     * @returns a conditionalAccessLocations
     */
    public get locations() {
        return this._locations;
    };
    /**
     * Sets the locations property value. Locations included in and excluded from the policy.
     * @param value Value to set for the locations property.
     */
    public set locations(value: ConditionalAccessLocations | undefined) {
        this._locations = value;
    };
    /**
     * Gets the platforms property value. Platforms included in and excluded from the policy.
     * @returns a conditionalAccessPlatforms
     */
    public get platforms() {
        return this._platforms;
    };
    /**
     * Sets the platforms property value. Platforms included in and excluded from the policy.
     * @param value Value to set for the platforms property.
     */
    public set platforms(value: ConditionalAccessPlatforms | undefined) {
        this._platforms = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ConditionalAccessApplications>("applications", this.applications);
        this.clientAppTypes && writer.writeEnumValue<ConditionalAccessClientApp>("clientAppTypes", ...this.clientAppTypes);
        writer.writeObjectValue<ConditionalAccessDevices>("devices", this.devices);
        writer.writeObjectValue<ConditionalAccessLocations>("locations", this.locations);
        writer.writeObjectValue<ConditionalAccessPlatforms>("platforms", this.platforms);
        this.signInRiskLevels && writer.writeEnumValue<RiskLevel>("signInRiskLevels", ...this.signInRiskLevels);
        this.userRiskLevels && writer.writeEnumValue<RiskLevel>("userRiskLevels", ...this.userRiskLevels);
        writer.writeObjectValue<ConditionalAccessUsers>("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @returns a riskLevel
     */
    public get signInRiskLevels() {
        return this._signInRiskLevels;
    };
    /**
     * Sets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @param value Value to set for the signInRiskLevels property.
     */
    public set signInRiskLevels(value: RiskLevel[] | undefined) {
        this._signInRiskLevels = value;
    };
    /**
     * Gets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @returns a riskLevel
     */
    public get userRiskLevels() {
        return this._userRiskLevels;
    };
    /**
     * Sets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
     * @param value Value to set for the userRiskLevels property.
     */
    public set userRiskLevels(value: RiskLevel[] | undefined) {
        this._userRiskLevels = value;
    };
    /**
     * Gets the users property value. 
     * @returns a conditionalAccessUsers
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. 
     * @param value Value to set for the users property.
     */
    public set users(value: ConditionalAccessUsers | undefined) {
        this._users = value;
    };
}
