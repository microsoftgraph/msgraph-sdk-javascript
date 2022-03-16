import {EnrollmentState} from './enrollmentState';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsAutopilotDeviceIdentity extends Entity implements Parsable {
    /** Addressable user name.  */
    private _addressableUserName?: string | undefined;
    /** AAD Device ID - to be deprecated  */
    private _azureActiveDirectoryDeviceId?: string | undefined;
    /** Display Name  */
    private _displayName?: string | undefined;
    /** Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted.  */
    private _enrollmentState?: EnrollmentState | undefined;
    /** Group Tag of the Windows autopilot device.  */
    private _groupTag?: string | undefined;
    /** Intune Last Contacted Date Time of the Windows autopilot device.  */
    private _lastContactedDateTime?: Date | undefined;
    /** Managed Device ID  */
    private _managedDeviceId?: string | undefined;
    /** Oem manufacturer of the Windows autopilot device.  */
    private _manufacturer?: string | undefined;
    /** Model name of the Windows autopilot device.  */
    private _model?: string | undefined;
    /** Product Key of the Windows autopilot device.  */
    private _productKey?: string | undefined;
    /** Purchase Order Identifier of the Windows autopilot device.  */
    private _purchaseOrderIdentifier?: string | undefined;
    /** Resource Name.  */
    private _resourceName?: string | undefined;
    /** Serial number of the Windows autopilot device.  */
    private _serialNumber?: string | undefined;
    /** SKU Number  */
    private _skuNumber?: string | undefined;
    /** System Family  */
    private _systemFamily?: string | undefined;
    /** User Principal Name.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the addressableUserName property value. Addressable user name.
     * @returns a string
     */
    public get addressableUserName() {
        return this._addressableUserName;
    };
    /**
     * Sets the addressableUserName property value. Addressable user name.
     * @param value Value to set for the addressableUserName property.
     */
    public set addressableUserName(value: string | undefined) {
        this._addressableUserName = value;
    };
    /**
     * Gets the azureActiveDirectoryDeviceId property value. AAD Device ID - to be deprecated
     * @returns a string
     */
    public get azureActiveDirectoryDeviceId() {
        return this._azureActiveDirectoryDeviceId;
    };
    /**
     * Sets the azureActiveDirectoryDeviceId property value. AAD Device ID - to be deprecated
     * @param value Value to set for the azureActiveDirectoryDeviceId property.
     */
    public set azureActiveDirectoryDeviceId(value: string | undefined) {
        this._azureActiveDirectoryDeviceId = value;
    };
    /**
     * Instantiates a new windowsAutopilotDeviceIdentity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Display Name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display Name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the enrollmentState property value. Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted.
     * @returns a enrollmentState
     */
    public get enrollmentState() {
        return this._enrollmentState;
    };
    /**
     * Sets the enrollmentState property value. Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted.
     * @param value Value to set for the enrollmentState property.
     */
    public set enrollmentState(value: EnrollmentState | undefined) {
        this._enrollmentState = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["addressableUserName", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).addressableUserName = n.getStringValue(); }],
            ["azureActiveDirectoryDeviceId", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).azureActiveDirectoryDeviceId = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).displayName = n.getStringValue(); }],
            ["enrollmentState", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).enrollmentState = n.getEnumValue<EnrollmentState>(EnrollmentState); }],
            ["groupTag", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).groupTag = n.getStringValue(); }],
            ["lastContactedDateTime", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).lastContactedDateTime = n.getDateValue(); }],
            ["managedDeviceId", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).managedDeviceId = n.getStringValue(); }],
            ["manufacturer", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).manufacturer = n.getStringValue(); }],
            ["model", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).model = n.getStringValue(); }],
            ["productKey", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).productKey = n.getStringValue(); }],
            ["purchaseOrderIdentifier", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).purchaseOrderIdentifier = n.getStringValue(); }],
            ["resourceName", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).resourceName = n.getStringValue(); }],
            ["serialNumber", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).serialNumber = n.getStringValue(); }],
            ["skuNumber", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).skuNumber = n.getStringValue(); }],
            ["systemFamily", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).systemFamily = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as WindowsAutopilotDeviceIdentity).userPrincipalName = n.getStringValue(); }],
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
     * Gets the lastContactedDateTime property value. Intune Last Contacted Date Time of the Windows autopilot device.
     * @returns a Date
     */
    public get lastContactedDateTime() {
        return this._lastContactedDateTime;
    };
    /**
     * Sets the lastContactedDateTime property value. Intune Last Contacted Date Time of the Windows autopilot device.
     * @param value Value to set for the lastContactedDateTime property.
     */
    public set lastContactedDateTime(value: Date | undefined) {
        this._lastContactedDateTime = value;
    };
    /**
     * Gets the managedDeviceId property value. Managed Device ID
     * @returns a string
     */
    public get managedDeviceId() {
        return this._managedDeviceId;
    };
    /**
     * Sets the managedDeviceId property value. Managed Device ID
     * @param value Value to set for the managedDeviceId property.
     */
    public set managedDeviceId(value: string | undefined) {
        this._managedDeviceId = value;
    };
    /**
     * Gets the manufacturer property value. Oem manufacturer of the Windows autopilot device.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. Oem manufacturer of the Windows autopilot device.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the model property value. Model name of the Windows autopilot device.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. Model name of the Windows autopilot device.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
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
     * Gets the purchaseOrderIdentifier property value. Purchase Order Identifier of the Windows autopilot device.
     * @returns a string
     */
    public get purchaseOrderIdentifier() {
        return this._purchaseOrderIdentifier;
    };
    /**
     * Sets the purchaseOrderIdentifier property value. Purchase Order Identifier of the Windows autopilot device.
     * @param value Value to set for the purchaseOrderIdentifier property.
     */
    public set purchaseOrderIdentifier(value: string | undefined) {
        this._purchaseOrderIdentifier = value;
    };
    /**
     * Gets the resourceName property value. Resource Name.
     * @returns a string
     */
    public get resourceName() {
        return this._resourceName;
    };
    /**
     * Sets the resourceName property value. Resource Name.
     * @param value Value to set for the resourceName property.
     */
    public set resourceName(value: string | undefined) {
        this._resourceName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        writer.writeStringValue("azureActiveDirectoryDeviceId", this.azureActiveDirectoryDeviceId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<EnrollmentState>("enrollmentState", this.enrollmentState);
        writer.writeStringValue("groupTag", this.groupTag);
        writer.writeDateValue("lastContactedDateTime", this.lastContactedDateTime);
        writer.writeStringValue("managedDeviceId", this.managedDeviceId);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("productKey", this.productKey);
        writer.writeStringValue("purchaseOrderIdentifier", this.purchaseOrderIdentifier);
        writer.writeStringValue("resourceName", this.resourceName);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeStringValue("skuNumber", this.skuNumber);
        writer.writeStringValue("systemFamily", this.systemFamily);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
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
     * Gets the skuNumber property value. SKU Number
     * @returns a string
     */
    public get skuNumber() {
        return this._skuNumber;
    };
    /**
     * Sets the skuNumber property value. SKU Number
     * @param value Value to set for the skuNumber property.
     */
    public set skuNumber(value: string | undefined) {
        this._skuNumber = value;
    };
    /**
     * Gets the systemFamily property value. System Family
     * @returns a string
     */
    public get systemFamily() {
        return this._systemFamily;
    };
    /**
     * Sets the systemFamily property value. System Family
     * @param value Value to set for the systemFamily property.
     */
    public set systemFamily(value: string | undefined) {
        this._systemFamily = value;
    };
    /**
     * Gets the userPrincipalName property value. User Principal Name.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User Principal Name.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
