import {AuthenticationMethod, AuthenticationMethodKeyStrength, Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsHelloForBusinessAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time that this Windows Hello for Business key was registered.  */
    private _createdDateTime?: Date | undefined;
    /** The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.  */
    private _device?: Device | undefined;
    /** The name of the device on which Windows Hello for Business is registered  */
    private _displayName?: string | undefined;
    /** Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.  */
    private _keyStrength?: AuthenticationMethodKeyStrength | undefined;
    /**
     * Instantiates a new windowsHelloForBusinessAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the device property value. The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @returns a device
     */
    public get device() {
        return this._device;
    };
    /**
     * Gets the displayName property value. The name of the device on which Windows Hello for Business is registered
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     * @returns a authenticationMethodKeyStrength
     */
    public get keyStrength() {
        return this._keyStrength;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as WindowsHelloForBusinessAuthenticationMethod).createdDateTime = n.getDateValue(); }],
            ["device", (o, n) => { (o as unknown as WindowsHelloForBusinessAuthenticationMethod).device = n.getObjectValue<Device>(Device); }],
            ["displayName", (o, n) => { (o as unknown as WindowsHelloForBusinessAuthenticationMethod).displayName = n.getStringValue(); }],
            ["keyStrength", (o, n) => { (o as unknown as WindowsHelloForBusinessAuthenticationMethod).keyStrength = n.getEnumValue<AuthenticationMethodKeyStrength>(AuthenticationMethodKeyStrength); }],
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
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<AuthenticationMethodKeyStrength>("keyStrength", this.keyStrength);
    };
    /**
     * Sets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the device property value. The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.
     * @param value Value to set for the device property.
     */
    public set device(value: Device | undefined) {
        this._device = value;
    };
    /**
     * Sets the displayName property value. The name of the device on which Windows Hello for Business is registered
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the keyStrength property value. Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
     * @param value Value to set for the keyStrength property.
     */
    public set keyStrength(value: AuthenticationMethodKeyStrength | undefined) {
        this._keyStrength = value;
    };
}
