import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingStateDeviceSummary extends Entity implements Parsable {
    /** Device Compliant count for the setting  */
    private _compliantDeviceCount?: number | undefined;
    /** Device conflict error count for the setting  */
    private _conflictDeviceCount?: number | undefined;
    /** Device error count for the setting  */
    private _errorDeviceCount?: number | undefined;
    /** Name of the InstancePath for the setting  */
    private _instancePath?: string | undefined;
    /** Device NonCompliant count for the setting  */
    private _nonCompliantDeviceCount?: number | undefined;
    /** Device Not Applicable count for the setting  */
    private _notApplicableDeviceCount?: number | undefined;
    /** Device Compliant count for the setting  */
    private _remediatedDeviceCount?: number | undefined;
    /** Name of the setting  */
    private _settingName?: string | undefined;
    /** Device Unkown count for the setting  */
    private _unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new settingStateDeviceSummary and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the compliantDeviceCount property value. Device Compliant count for the setting
     * @returns a integer
     */
    public get compliantDeviceCount() {
        return this._compliantDeviceCount;
    };
    /**
     * Gets the conflictDeviceCount property value. Device conflict error count for the setting
     * @returns a integer
     */
    public get conflictDeviceCount() {
        return this._conflictDeviceCount;
    };
    /**
     * Gets the errorDeviceCount property value. Device error count for the setting
     * @returns a integer
     */
    public get errorDeviceCount() {
        return this._errorDeviceCount;
    };
    /**
     * Gets the instancePath property value. Name of the InstancePath for the setting
     * @returns a string
     */
    public get instancePath() {
        return this._instancePath;
    };
    /**
     * Gets the nonCompliantDeviceCount property value. Device NonCompliant count for the setting
     * @returns a integer
     */
    public get nonCompliantDeviceCount() {
        return this._nonCompliantDeviceCount;
    };
    /**
     * Gets the notApplicableDeviceCount property value. Device Not Applicable count for the setting
     * @returns a integer
     */
    public get notApplicableDeviceCount() {
        return this._notApplicableDeviceCount;
    };
    /**
     * Gets the remediatedDeviceCount property value. Device Compliant count for the setting
     * @returns a integer
     */
    public get remediatedDeviceCount() {
        return this._remediatedDeviceCount;
    };
    /**
     * Gets the settingName property value. Name of the setting
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Gets the unknownDeviceCount property value. Device Unkown count for the setting
     * @returns a integer
     */
    public get unknownDeviceCount() {
        return this._unknownDeviceCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["compliantDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).compliantDeviceCount = n.getNumberValue(); }],
            ["conflictDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).conflictDeviceCount = n.getNumberValue(); }],
            ["errorDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).errorDeviceCount = n.getNumberValue(); }],
            ["instancePath", (o, n) => { (o as unknown as SettingStateDeviceSummary).instancePath = n.getStringValue(); }],
            ["nonCompliantDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).nonCompliantDeviceCount = n.getNumberValue(); }],
            ["notApplicableDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).notApplicableDeviceCount = n.getNumberValue(); }],
            ["remediatedDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).remediatedDeviceCount = n.getNumberValue(); }],
            ["settingName", (o, n) => { (o as unknown as SettingStateDeviceSummary).settingName = n.getStringValue(); }],
            ["unknownDeviceCount", (o, n) => { (o as unknown as SettingStateDeviceSummary).unknownDeviceCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        writer.writeStringValue("instancePath", this.instancePath);
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
    };
    /**
     * Sets the compliantDeviceCount property value. Device Compliant count for the setting
     * @param value Value to set for the compliantDeviceCount property.
     */
    public set compliantDeviceCount(value: number | undefined) {
        this._compliantDeviceCount = value;
    };
    /**
     * Sets the conflictDeviceCount property value. Device conflict error count for the setting
     * @param value Value to set for the conflictDeviceCount property.
     */
    public set conflictDeviceCount(value: number | undefined) {
        this._conflictDeviceCount = value;
    };
    /**
     * Sets the errorDeviceCount property value. Device error count for the setting
     * @param value Value to set for the errorDeviceCount property.
     */
    public set errorDeviceCount(value: number | undefined) {
        this._errorDeviceCount = value;
    };
    /**
     * Sets the instancePath property value. Name of the InstancePath for the setting
     * @param value Value to set for the instancePath property.
     */
    public set instancePath(value: string | undefined) {
        this._instancePath = value;
    };
    /**
     * Sets the nonCompliantDeviceCount property value. Device NonCompliant count for the setting
     * @param value Value to set for the nonCompliantDeviceCount property.
     */
    public set nonCompliantDeviceCount(value: number | undefined) {
        this._nonCompliantDeviceCount = value;
    };
    /**
     * Sets the notApplicableDeviceCount property value. Device Not Applicable count for the setting
     * @param value Value to set for the notApplicableDeviceCount property.
     */
    public set notApplicableDeviceCount(value: number | undefined) {
        this._notApplicableDeviceCount = value;
    };
    /**
     * Sets the remediatedDeviceCount property value. Device Compliant count for the setting
     * @param value Value to set for the remediatedDeviceCount property.
     */
    public set remediatedDeviceCount(value: number | undefined) {
        this._remediatedDeviceCount = value;
    };
    /**
     * Sets the settingName property value. Name of the setting
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        this._settingName = value;
    };
    /**
     * Sets the unknownDeviceCount property value. Device Unkown count for the setting
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        this._unknownDeviceCount = value;
    };
}
