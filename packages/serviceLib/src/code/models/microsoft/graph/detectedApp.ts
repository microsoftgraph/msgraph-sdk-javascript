import {Entity, ManagedDevice} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DetectedApp extends Entity implements Parsable {
    /** The number of devices that have installed this application  */
    private _deviceCount?: number | undefined;
    /** Name of the discovered application. Read-only  */
    private _displayName?: string | undefined;
    /** The devices that have the discovered application installed  */
    private _managedDevices?: ManagedDevice[] | undefined;
    /** Discovered application size in bytes. Read-only  */
    private _sizeInByte?: number | undefined;
    /** Version of the discovered application. Read-only  */
    private _version?: string | undefined;
    /**
     * Instantiates a new detectedApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceCount property value. The number of devices that have installed this application
     * @returns a integer
     */
    public get deviceCount() {
        return this._deviceCount;
    };
    /**
     * Gets the displayName property value. Name of the discovered application. Read-only
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the managedDevices property value. The devices that have the discovered application installed
     * @returns a managedDevice
     */
    public get managedDevices() {
        return this._managedDevices;
    };
    /**
     * Gets the sizeInByte property value. Discovered application size in bytes. Read-only
     * @returns a int64
     */
    public get sizeInByte() {
        return this._sizeInByte;
    };
    /**
     * Gets the version property value. Version of the discovered application. Read-only
     * @returns a string
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
            ["deviceCount", (o, n) => { (o as unknown as DetectedApp).deviceCount = n.getNumberValue(); }],
            ["displayName", (o, n) => { (o as unknown as DetectedApp).displayName = n.getStringValue(); }],
            ["managedDevices", (o, n) => { (o as unknown as DetectedApp).managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(ManagedDevice); }],
            ["sizeInByte", (o, n) => { (o as unknown as DetectedApp).sizeInByte = n.getNumberValue(); }],
            ["version", (o, n) => { (o as unknown as DetectedApp).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("deviceCount", this.deviceCount);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", this.managedDevices);
        writer.writeNumberValue("sizeInByte", this.sizeInByte);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Sets the deviceCount property value. The number of devices that have installed this application
     * @param value Value to set for the deviceCount property.
     */
    public set deviceCount(value: number | undefined) {
        this._deviceCount = value;
    };
    /**
     * Sets the displayName property value. Name of the discovered application. Read-only
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the managedDevices property value. The devices that have the discovered application installed
     * @param value Value to set for the managedDevices property.
     */
    public set managedDevices(value: ManagedDevice[] | undefined) {
        this._managedDevices = value;
    };
    /**
     * Sets the sizeInByte property value. Discovered application size in bytes. Read-only
     * @param value Value to set for the sizeInByte property.
     */
    public set sizeInByte(value: number | undefined) {
        this._sizeInByte = value;
    };
    /**
     * Sets the version property value. Version of the discovered application. Read-only
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
