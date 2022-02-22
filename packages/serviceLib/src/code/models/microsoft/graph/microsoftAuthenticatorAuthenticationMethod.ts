import {AuthenticationMethod, Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time that this app was registered. This property is null if the device is not registered for passwordless Phone Sign-In.  */
    private _createdDateTime?: Date | undefined;
    /** The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.  */
    private _device?: Device | undefined;
    /** Tags containing app metadata.  */
    private _deviceTag?: string | undefined;
    /** The name of the device on which this app is registered.  */
    private _displayName?: string | undefined;
    /** Numerical version of this instance of the Authenticator app.  */
    private _phoneAppVersion?: string | undefined;
    /**
     * Instantiates a new microsoftAuthenticatorAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time that this app was registered. This property is null if the device is not registered for passwordless Phone Sign-In.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the device property value. The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.
     * @returns a device
     */
    public get device() {
        return this._device;
    };
    /**
     * Gets the deviceTag property value. Tags containing app metadata.
     * @returns a string
     */
    public get deviceTag() {
        return this._deviceTag;
    };
    /**
     * Gets the displayName property value. The name of the device on which this app is registered.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the phoneAppVersion property value. Numerical version of this instance of the Authenticator app.
     * @returns a string
     */
    public get phoneAppVersion() {
        return this._phoneAppVersion;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as MicrosoftAuthenticatorAuthenticationMethod).createdDateTime = n.getDateValue(); }],
            ["device", (o, n) => { (o as unknown as MicrosoftAuthenticatorAuthenticationMethod).device = n.getObjectValue<Device>(Device); }],
            ["deviceTag", (o, n) => { (o as unknown as MicrosoftAuthenticatorAuthenticationMethod).deviceTag = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as MicrosoftAuthenticatorAuthenticationMethod).displayName = n.getStringValue(); }],
            ["phoneAppVersion", (o, n) => { (o as unknown as MicrosoftAuthenticatorAuthenticationMethod).phoneAppVersion = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<Device>("device", this.device);
        writer.writeStringValue("deviceTag", this.deviceTag);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("phoneAppVersion", this.phoneAppVersion);
    };
    /**
     * Sets the createdDateTime property value. The date and time that this app was registered. This property is null if the device is not registered for passwordless Phone Sign-In.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the device property value. The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.
     * @param value Value to set for the device property.
     */
    public set device(value: Device | undefined) {
        this._device = value;
    };
    /**
     * Sets the deviceTag property value. Tags containing app metadata.
     * @param value Value to set for the deviceTag property.
     */
    public set deviceTag(value: string | undefined) {
        this._deviceTag = value;
    };
    /**
     * Sets the displayName property value. The name of the device on which this app is registered.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the phoneAppVersion property value. Numerical version of this instance of the Authenticator app.
     * @param value Value to set for the phoneAppVersion property.
     */
    public set phoneAppVersion(value: string | undefined) {
        this._phoneAppVersion = value;
    };
}
