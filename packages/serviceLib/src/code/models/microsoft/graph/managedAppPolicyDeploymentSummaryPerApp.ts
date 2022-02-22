import {MobileAppIdentifier} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppPolicyDeploymentSummaryPerApp implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Number of users the policy is applied.  */
    private _configurationAppliedUserCount?: number | undefined;
    /** Deployment of an app.  */
    private _mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /**
     * Instantiates a new managedAppPolicyDeploymentSummaryPerApp and sets the default values.
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
     * Gets the configurationAppliedUserCount property value. Number of users the policy is applied.
     * @returns a integer
     */
    public get configurationAppliedUserCount() {
        return this._configurationAppliedUserCount;
    };
    /**
     * Gets the mobileAppIdentifier property value. Deployment of an app.
     * @returns a mobileAppIdentifier
     */
    public get mobileAppIdentifier() {
        return this._mobileAppIdentifier;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["configurationAppliedUserCount", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummaryPerApp).configurationAppliedUserCount = n.getNumberValue(); }],
            ["mobileAppIdentifier", (o, n) => { (o as unknown as ManagedAppPolicyDeploymentSummaryPerApp).mobileAppIdentifier = n.getObjectValue<MobileAppIdentifier>(MobileAppIdentifier); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("configurationAppliedUserCount", this.configurationAppliedUserCount);
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", this.mobileAppIdentifier);
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
     * Sets the configurationAppliedUserCount property value. Number of users the policy is applied.
     * @param value Value to set for the configurationAppliedUserCount property.
     */
    public set configurationAppliedUserCount(value: number | undefined) {
        this._configurationAppliedUserCount = value;
    };
    /**
     * Sets the mobileAppIdentifier property value. Deployment of an app.
     * @param value Value to set for the mobileAppIdentifier property.
     */
    public set mobileAppIdentifier(value: MobileAppIdentifier | undefined) {
        this._mobileAppIdentifier = value;
    };
}
