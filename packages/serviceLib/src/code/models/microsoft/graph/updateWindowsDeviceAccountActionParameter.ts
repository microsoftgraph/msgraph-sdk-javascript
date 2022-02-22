import {WindowsDeviceAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateWindowsDeviceAccountActionParameter implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Not yet documented  */
    private _calendarSyncEnabled?: boolean | undefined;
    /** Not yet documented  */
    private _deviceAccount?: WindowsDeviceAccount | undefined;
    /** Not yet documented  */
    private _deviceAccountEmail?: string | undefined;
    /** Not yet documented  */
    private _exchangeServer?: string | undefined;
    /** Not yet documented  */
    private _passwordRotationEnabled?: boolean | undefined;
    /** Not yet documented  */
    private _sessionInitiationProtocalAddress?: string | undefined;
    /**
     * Instantiates a new updateWindowsDeviceAccountActionParameter and sets the default values.
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
     * Gets the calendarSyncEnabled property value. Not yet documented
     * @returns a boolean
     */
    public get calendarSyncEnabled() {
        return this._calendarSyncEnabled;
    };
    /**
     * Gets the deviceAccount property value. Not yet documented
     * @returns a windowsDeviceAccount
     */
    public get deviceAccount() {
        return this._deviceAccount;
    };
    /**
     * Gets the deviceAccountEmail property value. Not yet documented
     * @returns a string
     */
    public get deviceAccountEmail() {
        return this._deviceAccountEmail;
    };
    /**
     * Gets the exchangeServer property value. Not yet documented
     * @returns a string
     */
    public get exchangeServer() {
        return this._exchangeServer;
    };
    /**
     * Gets the passwordRotationEnabled property value. Not yet documented
     * @returns a boolean
     */
    public get passwordRotationEnabled() {
        return this._passwordRotationEnabled;
    };
    /**
     * Gets the sessionInitiationProtocalAddress property value. Not yet documented
     * @returns a string
     */
    public get sessionInitiationProtocalAddress() {
        return this._sessionInitiationProtocalAddress;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["calendarSyncEnabled", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountActionParameter).calendarSyncEnabled = n.getBooleanValue(); }],
            ["deviceAccount", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountActionParameter).deviceAccount = n.getObjectValue<WindowsDeviceAccount>(WindowsDeviceAccount); }],
            ["deviceAccountEmail", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountActionParameter).deviceAccountEmail = n.getStringValue(); }],
            ["exchangeServer", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountActionParameter).exchangeServer = n.getStringValue(); }],
            ["passwordRotationEnabled", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountActionParameter).passwordRotationEnabled = n.getBooleanValue(); }],
            ["sessionInitiationProtocalAddress", (o, n) => { (o as unknown as UpdateWindowsDeviceAccountActionParameter).sessionInitiationProtocalAddress = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("calendarSyncEnabled", this.calendarSyncEnabled);
        writer.writeObjectValue<WindowsDeviceAccount>("deviceAccount", this.deviceAccount);
        writer.writeStringValue("deviceAccountEmail", this.deviceAccountEmail);
        writer.writeStringValue("exchangeServer", this.exchangeServer);
        writer.writeBooleanValue("passwordRotationEnabled", this.passwordRotationEnabled);
        writer.writeStringValue("sessionInitiationProtocalAddress", this.sessionInitiationProtocalAddress);
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
     * Sets the calendarSyncEnabled property value. Not yet documented
     * @param value Value to set for the calendarSyncEnabled property.
     */
    public set calendarSyncEnabled(value: boolean | undefined) {
        this._calendarSyncEnabled = value;
    };
    /**
     * Sets the deviceAccount property value. Not yet documented
     * @param value Value to set for the deviceAccount property.
     */
    public set deviceAccount(value: WindowsDeviceAccount | undefined) {
        this._deviceAccount = value;
    };
    /**
     * Sets the deviceAccountEmail property value. Not yet documented
     * @param value Value to set for the deviceAccountEmail property.
     */
    public set deviceAccountEmail(value: string | undefined) {
        this._deviceAccountEmail = value;
    };
    /**
     * Sets the exchangeServer property value. Not yet documented
     * @param value Value to set for the exchangeServer property.
     */
    public set exchangeServer(value: string | undefined) {
        this._exchangeServer = value;
    };
    /**
     * Sets the passwordRotationEnabled property value. Not yet documented
     * @param value Value to set for the passwordRotationEnabled property.
     */
    public set passwordRotationEnabled(value: boolean | undefined) {
        this._passwordRotationEnabled = value;
    };
    /**
     * Sets the sessionInitiationProtocalAddress property value. Not yet documented
     * @param value Value to set for the sessionInitiationProtocalAddress property.
     */
    public set sessionInitiationProtocalAddress(value: string | undefined) {
        this._sessionInitiationProtocalAddress = value;
    };
}
