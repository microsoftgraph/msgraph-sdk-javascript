import {createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue';
import {Entity, ImportedWindowsAutopilotDeviceIdentityState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportedWindowsAutopilotDeviceIdentity extends Entity implements Parsable {
    /** UPN of the user the device will be assigned  */
    private _assignedUserPrincipalName?: string | undefined;
    /** Group Tag of the Windows autopilot device.  */
    private _groupTag?: string | undefined;
    /** Hardware Blob of the Windows autopilot device.  */
    private _hardwareIdentifier?: string | undefined;
    /** The Import Id of the Windows autopilot device.  */
    private _importId?: string | undefined;
    /** Product Key of the Windows autopilot device.  */
    private _productKey?: string | undefined;
    /** Serial number of the Windows autopilot device.  */
    private _serialNumber?: string | undefined;
    /** Current state of the imported device.  */
    private _state?: ImportedWindowsAutopilotDeviceIdentityState | undefined;
    /**
     * Gets the assignedUserPrincipalName property value. UPN of the user the device will be assigned
     * @returns a string
     */
    public get assignedUserPrincipalName() {
        return this._assignedUserPrincipalName;
    };
    /**
     * Sets the assignedUserPrincipalName property value. UPN of the user the device will be assigned
     * @param value Value to set for the assignedUserPrincipalName property.
     */
    public set assignedUserPrincipalName(value: string | undefined) {
        this._assignedUserPrincipalName = value;
    };
    /**
     * Instantiates a new importedWindowsAutopilotDeviceIdentity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignedUserPrincipalName", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).assignedUserPrincipalName = n.getStringValue(); }],
            ["groupTag", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).groupTag = n.getStringValue(); }],
            ["hardwareIdentifier", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).hardwareIdentifier = n.getStringValue(); }],
            ["importId", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).importId = n.getStringValue(); }],
            ["productKey", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).productKey = n.getStringValue(); }],
            ["serialNumber", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).serialNumber = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentity).state = n.getObjectValue<ImportedWindowsAutopilotDeviceIdentityState>(createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the groupTag property value. Group Tag of the Windows autopilot device.
     * @returns a string
     */
    public get groupTag() {
        return this._groupTag;
    };
    /**
     * Sets the groupTag property value. Group Tag of the Windows autopilot device.
     * @param value Value to set for the groupTag property.
     */
    public set groupTag(value: string | undefined) {
        this._groupTag = value;
    };
    /**
     * Gets the hardwareIdentifier property value. Hardware Blob of the Windows autopilot device.
     * @returns a binary
     */
    public get hardwareIdentifier() {
        return this._hardwareIdentifier;
    };
    /**
     * Sets the hardwareIdentifier property value. Hardware Blob of the Windows autopilot device.
     * @param value Value to set for the hardwareIdentifier property.
     */
    public set hardwareIdentifier(value: string | undefined) {
        this._hardwareIdentifier = value;
    };
    /**
     * Gets the importId property value. The Import Id of the Windows autopilot device.
     * @returns a string
     */
    public get importId() {
        return this._importId;
    };
    /**
     * Sets the importId property value. The Import Id of the Windows autopilot device.
     * @param value Value to set for the importId property.
     */
    public set importId(value: string | undefined) {
        this._importId = value;
    };
    /**
     * Gets the productKey property value. Product Key of the Windows autopilot device.
     * @returns a string
     */
    public get productKey() {
        return this._productKey;
    };
    /**
     * Sets the productKey property value. Product Key of the Windows autopilot device.
     * @param value Value to set for the productKey property.
     */
    public set productKey(value: string | undefined) {
        this._productKey = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assignedUserPrincipalName", this.assignedUserPrincipalName);
        writer.writeStringValue("groupTag", this.groupTag);
        writer.writeStringValue("hardwareIdentifier", this.hardwareIdentifier);
        writer.writeStringValue("importId", this.importId);
        writer.writeStringValue("productKey", this.productKey);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeObjectValue<ImportedWindowsAutopilotDeviceIdentityState>("state", this.state);
    };
    /**
     * Gets the serialNumber property value. Serial number of the Windows autopilot device.
     * @returns a string
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Sets the serialNumber property value. Serial number of the Windows autopilot device.
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: string | undefined) {
        this._serialNumber = value;
    };
    /**
     * Gets the state property value. Current state of the imported device.
     * @returns a importedWindowsAutopilotDeviceIdentityState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Current state of the imported device.
     * @param value Value to set for the state property.
     */
    public set state(value: ImportedWindowsAutopilotDeviceIdentityState | undefined) {
        this._state = value;
    };
}
