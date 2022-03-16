import {Entity} from './index';
import {InstallState} from './installState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceInstallState extends Entity implements Parsable {
    /** Device Id.  */
    private _deviceId?: string | undefined;
    /** Device name.  */
    private _deviceName?: string | undefined;
    /** The error code for install failures.  */
    private _errorCode?: string | undefined;
    /** The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown.  */
    private _installState?: InstallState | undefined;
    /** Last sync date and time.  */
    private _lastSyncDateTime?: Date | undefined;
    /** OS Description.  */
    private _osDescription?: string | undefined;
    /** OS Version.  */
    private _osVersion?: string | undefined;
    /** Device User Name.  */
    private _userName?: string | undefined;
    /**
     * Instantiates a new deviceInstallState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceId property value. Device Id.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Device Id.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Gets the deviceName property value. Device name.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Device name.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the errorCode property value. The error code for install failures.
     * @returns a string
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. The error code for install failures.
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: string | undefined) {
        this._errorCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["deviceId", (o, n) => { (o as unknown as DeviceInstallState).deviceId = n.getStringValue(); }],
            ["deviceName", (o, n) => { (o as unknown as DeviceInstallState).deviceName = n.getStringValue(); }],
            ["errorCode", (o, n) => { (o as unknown as DeviceInstallState).errorCode = n.getStringValue(); }],
            ["installState", (o, n) => { (o as unknown as DeviceInstallState).installState = n.getEnumValue<InstallState>(InstallState); }],
            ["lastSyncDateTime", (o, n) => { (o as unknown as DeviceInstallState).lastSyncDateTime = n.getDateValue(); }],
            ["osDescription", (o, n) => { (o as unknown as DeviceInstallState).osDescription = n.getStringValue(); }],
            ["osVersion", (o, n) => { (o as unknown as DeviceInstallState).osVersion = n.getStringValue(); }],
            ["userName", (o, n) => { (o as unknown as DeviceInstallState).userName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the installState property value. The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown.
     * @returns a installState
     */
    public get installState() {
        return this._installState;
    };
    /**
     * Sets the installState property value. The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown.
     * @param value Value to set for the installState property.
     */
    public set installState(value: InstallState | undefined) {
        this._installState = value;
    };
    /**
     * Gets the lastSyncDateTime property value. Last sync date and time.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. Last sync date and time.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the osDescription property value. OS Description.
     * @returns a string
     */
    public get osDescription() {
        return this._osDescription;
    };
    /**
     * Sets the osDescription property value. OS Description.
     * @param value Value to set for the osDescription property.
     */
    public set osDescription(value: string | undefined) {
        this._osDescription = value;
    };
    /**
     * Gets the osVersion property value. OS Version.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. OS Version.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        this._osVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("errorCode", this.errorCode);
        writer.writeEnumValue<InstallState>("installState", this.installState);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("osDescription", this.osDescription);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeStringValue("userName", this.userName);
    };
    /**
     * Gets the userName property value. Device User Name.
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. Device User Name.
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
}
