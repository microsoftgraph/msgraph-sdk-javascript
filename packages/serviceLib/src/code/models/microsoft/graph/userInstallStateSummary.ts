import {DeviceInstallState, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserInstallStateSummary extends Entity implements Parsable {
    /** The install state of the eBook.  */
    private _deviceStates?: DeviceInstallState[] | undefined;
    /** Failed Device Count.  */
    private _failedDeviceCount?: number | undefined;
    /** Installed Device Count.  */
    private _installedDeviceCount?: number | undefined;
    /** Not installed device count.  */
    private _notInstalledDeviceCount?: number | undefined;
    /** User name.  */
    private _userName?: string | undefined;
    /**
     * Instantiates a new userInstallStateSummary and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceStates property value. The install state of the eBook.
     * @returns a deviceInstallState
     */
    public get deviceStates() {
        return this._deviceStates;
    };
    /**
     * Gets the failedDeviceCount property value. Failed Device Count.
     * @returns a integer
     */
    public get failedDeviceCount() {
        return this._failedDeviceCount;
    };
    /**
     * Gets the installedDeviceCount property value. Installed Device Count.
     * @returns a integer
     */
    public get installedDeviceCount() {
        return this._installedDeviceCount;
    };
    /**
     * Gets the notInstalledDeviceCount property value. Not installed device count.
     * @returns a integer
     */
    public get notInstalledDeviceCount() {
        return this._notInstalledDeviceCount;
    };
    /**
     * Gets the userName property value. User name.
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["deviceStates", (o, n) => { (o as unknown as UserInstallStateSummary).deviceStates = n.getCollectionOfObjectValues<DeviceInstallState>(DeviceInstallState); }],
            ["failedDeviceCount", (o, n) => { (o as unknown as UserInstallStateSummary).failedDeviceCount = n.getNumberValue(); }],
            ["installedDeviceCount", (o, n) => { (o as unknown as UserInstallStateSummary).installedDeviceCount = n.getNumberValue(); }],
            ["notInstalledDeviceCount", (o, n) => { (o as unknown as UserInstallStateSummary).notInstalledDeviceCount = n.getNumberValue(); }],
            ["userName", (o, n) => { (o as unknown as UserInstallStateSummary).userName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DeviceInstallState>("deviceStates", this.deviceStates);
        writer.writeNumberValue("failedDeviceCount", this.failedDeviceCount);
        writer.writeNumberValue("installedDeviceCount", this.installedDeviceCount);
        writer.writeNumberValue("notInstalledDeviceCount", this.notInstalledDeviceCount);
        writer.writeStringValue("userName", this.userName);
    };
    /**
     * Sets the deviceStates property value. The install state of the eBook.
     * @param value Value to set for the deviceStates property.
     */
    public set deviceStates(value: DeviceInstallState[] | undefined) {
        this._deviceStates = value;
    };
    /**
     * Sets the failedDeviceCount property value. Failed Device Count.
     * @param value Value to set for the failedDeviceCount property.
     */
    public set failedDeviceCount(value: number | undefined) {
        this._failedDeviceCount = value;
    };
    /**
     * Sets the installedDeviceCount property value. Installed Device Count.
     * @param value Value to set for the installedDeviceCount property.
     */
    public set installedDeviceCount(value: number | undefined) {
        this._installedDeviceCount = value;
    };
    /**
     * Sets the notInstalledDeviceCount property value. Not installed device count.
     * @param value Value to set for the notInstalledDeviceCount property.
     */
    public set notInstalledDeviceCount(value: number | undefined) {
        this._notInstalledDeviceCount = value;
    };
    /**
     * Sets the userName property value. User name.
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
}
