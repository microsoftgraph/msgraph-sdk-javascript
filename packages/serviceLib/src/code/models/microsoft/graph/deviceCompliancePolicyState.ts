import {ComplianceStatus, DeviceCompliancePolicySettingState, Entity, PolicyPlatformType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicyState extends Entity implements Parsable {
    /** The name of the policy for this policyBase  */
    private _displayName?: string | undefined;
    /** Platform type that the policy applies to  */
    private _platformType?: PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds  */
    private _settingCount?: number | undefined;
    private _settingStates?: DeviceCompliancePolicySettingState[] | undefined;
    /** The compliance state of the policy  */
    private _state?: ComplianceStatus | undefined;
    /** The version of the policy  */
    private _version?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicyState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the policy for this policyBase
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the platformType property value. Platform type that the policy applies to
     * @returns a policyPlatformType
     */
    public get platformType() {
        return this._platformType;
    };
    /**
     * Gets the settingCount property value. Count of how many setting a policy holds
     * @returns a integer
     */
    public get settingCount() {
        return this._settingCount;
    };
    /**
     * Gets the settingStates property value. 
     * @returns a deviceCompliancePolicySettingState
     */
    public get settingStates() {
        return this._settingStates;
    };
    /**
     * Gets the state property value. The compliance state of the policy
     * @returns a complianceStatus
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the version property value. The version of the policy
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as DeviceCompliancePolicyState).displayName = n.getStringValue(); }],
            ["platformType", (o, n) => { (o as unknown as DeviceCompliancePolicyState).platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType); }],
            ["settingCount", (o, n) => { (o as unknown as DeviceCompliancePolicyState).settingCount = n.getNumberValue(); }],
            ["settingStates", (o, n) => { (o as unknown as DeviceCompliancePolicyState).settingStates = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingState>(DeviceCompliancePolicySettingState); }],
            ["state", (o, n) => { (o as unknown as DeviceCompliancePolicyState).state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); }],
            ["version", (o, n) => { (o as unknown as DeviceCompliancePolicyState).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<PolicyPlatformType>("platformType", this.platformType);
        writer.writeNumberValue("settingCount", this.settingCount);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingState>("settingStates", this.settingStates);
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Sets the displayName property value. The name of the policy for this policyBase
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the platformType property value. Platform type that the policy applies to
     * @param value Value to set for the platformType property.
     */
    public set platformType(value: PolicyPlatformType | undefined) {
        this._platformType = value;
    };
    /**
     * Sets the settingCount property value. Count of how many setting a policy holds
     * @param value Value to set for the settingCount property.
     */
    public set settingCount(value: number | undefined) {
        this._settingCount = value;
    };
    /**
     * Sets the settingStates property value. 
     * @param value Value to set for the settingStates property.
     */
    public set settingStates(value: DeviceCompliancePolicySettingState[] | undefined) {
        this._settingStates = value;
    };
    /**
     * Sets the state property value. The compliance state of the policy
     * @param value Value to set for the state property.
     */
    public set state(value: ComplianceStatus | undefined) {
        this._state = value;
    };
    /**
     * Sets the version property value. The version of the policy
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
}
