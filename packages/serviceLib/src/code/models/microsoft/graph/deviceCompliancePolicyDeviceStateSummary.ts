import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicyDeviceStateSummary extends Entity implements Parsable {
    /** Number of compliant devices  */
    private _compliantDeviceCount?: number | undefined;
    /** Number of devices that have compliance managed by System Center Configuration Manager  */
    private _configManagerCount?: number | undefined;
    /** Number of conflict devices  */
    private _conflictDeviceCount?: number | undefined;
    /** Number of error devices  */
    private _errorDeviceCount?: number | undefined;
    /** Number of devices that are in grace period  */
    private _inGracePeriodCount?: number | undefined;
    /** Number of NonCompliant devices  */
    private _nonCompliantDeviceCount?: number | undefined;
    /** Number of not applicable devices  */
    private _notApplicableDeviceCount?: number | undefined;
    /** Number of remediated devices  */
    private _remediatedDeviceCount?: number | undefined;
    /** Number of unknown devices  */
    private _unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicyDeviceStateSummary and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the compliantDeviceCount property value. Number of compliant devices
     * @returns a integer
     */
    public get compliantDeviceCount() {
        return this._compliantDeviceCount;
    };
    /**
     * Gets the configManagerCount property value. Number of devices that have compliance managed by System Center Configuration Manager
     * @returns a integer
     */
    public get configManagerCount() {
        return this._configManagerCount;
    };
    /**
     * Gets the conflictDeviceCount property value. Number of conflict devices
     * @returns a integer
     */
    public get conflictDeviceCount() {
        return this._conflictDeviceCount;
    };
    /**
     * Gets the errorDeviceCount property value. Number of error devices
     * @returns a integer
     */
    public get errorDeviceCount() {
        return this._errorDeviceCount;
    };
    /**
     * Gets the inGracePeriodCount property value. Number of devices that are in grace period
     * @returns a integer
     */
    public get inGracePeriodCount() {
        return this._inGracePeriodCount;
    };
    /**
     * Gets the nonCompliantDeviceCount property value. Number of NonCompliant devices
     * @returns a integer
     */
    public get nonCompliantDeviceCount() {
        return this._nonCompliantDeviceCount;
    };
    /**
     * Gets the notApplicableDeviceCount property value. Number of not applicable devices
     * @returns a integer
     */
    public get notApplicableDeviceCount() {
        return this._notApplicableDeviceCount;
    };
    /**
     * Gets the remediatedDeviceCount property value. Number of remediated devices
     * @returns a integer
     */
    public get remediatedDeviceCount() {
        return this._remediatedDeviceCount;
    };
    /**
     * Gets the unknownDeviceCount property value. Number of unknown devices
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
            ["compliantDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).compliantDeviceCount = n.getNumberValue(); }],
            ["configManagerCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).configManagerCount = n.getNumberValue(); }],
            ["conflictDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).conflictDeviceCount = n.getNumberValue(); }],
            ["errorDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).errorDeviceCount = n.getNumberValue(); }],
            ["inGracePeriodCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).inGracePeriodCount = n.getNumberValue(); }],
            ["nonCompliantDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).nonCompliantDeviceCount = n.getNumberValue(); }],
            ["notApplicableDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).notApplicableDeviceCount = n.getNumberValue(); }],
            ["remediatedDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).remediatedDeviceCount = n.getNumberValue(); }],
            ["unknownDeviceCount", (o, n) => { (o as unknown as DeviceCompliancePolicyDeviceStateSummary).unknownDeviceCount = n.getNumberValue(); }],
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
        writer.writeNumberValue("configManagerCount", this.configManagerCount);
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        writer.writeNumberValue("inGracePeriodCount", this.inGracePeriodCount);
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
    };
    /**
     * Sets the compliantDeviceCount property value. Number of compliant devices
     * @param value Value to set for the compliantDeviceCount property.
     */
    public set compliantDeviceCount(value: number | undefined) {
        this._compliantDeviceCount = value;
    };
    /**
     * Sets the configManagerCount property value. Number of devices that have compliance managed by System Center Configuration Manager
     * @param value Value to set for the configManagerCount property.
     */
    public set configManagerCount(value: number | undefined) {
        this._configManagerCount = value;
    };
    /**
     * Sets the conflictDeviceCount property value. Number of conflict devices
     * @param value Value to set for the conflictDeviceCount property.
     */
    public set conflictDeviceCount(value: number | undefined) {
        this._conflictDeviceCount = value;
    };
    /**
     * Sets the errorDeviceCount property value. Number of error devices
     * @param value Value to set for the errorDeviceCount property.
     */
    public set errorDeviceCount(value: number | undefined) {
        this._errorDeviceCount = value;
    };
    /**
     * Sets the inGracePeriodCount property value. Number of devices that are in grace period
     * @param value Value to set for the inGracePeriodCount property.
     */
    public set inGracePeriodCount(value: number | undefined) {
        this._inGracePeriodCount = value;
    };
    /**
     * Sets the nonCompliantDeviceCount property value. Number of NonCompliant devices
     * @param value Value to set for the nonCompliantDeviceCount property.
     */
    public set nonCompliantDeviceCount(value: number | undefined) {
        this._nonCompliantDeviceCount = value;
    };
    /**
     * Sets the notApplicableDeviceCount property value. Number of not applicable devices
     * @param value Value to set for the notApplicableDeviceCount property.
     */
    public set notApplicableDeviceCount(value: number | undefined) {
        this._notApplicableDeviceCount = value;
    };
    /**
     * Sets the remediatedDeviceCount property value. Number of remediated devices
     * @param value Value to set for the remediatedDeviceCount property.
     */
    public set remediatedDeviceCount(value: number | undefined) {
        this._remediatedDeviceCount = value;
    };
    /**
     * Sets the unknownDeviceCount property value. Number of unknown devices
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        this._unknownDeviceCount = value;
    };
}
