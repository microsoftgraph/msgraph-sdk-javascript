import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceExchangeAccessStateSummary implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Total count of devices with Exchange Access State: Allowed.  */
    private _allowedDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Blocked.  */
    private _blockedDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Quarantined.  */
    private _quarantinedDeviceCount?: number | undefined;
    /** Total count of devices for which no Exchange Access State could be found.  */
    private _unavailableDeviceCount?: number | undefined;
    /** Total count of devices with Exchange Access State: Unknown.  */
    private _unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new deviceExchangeAccessStateSummary and sets the default values.
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
     * Gets the allowedDeviceCount property value. Total count of devices with Exchange Access State: Allowed.
     * @returns a integer
     */
    public get allowedDeviceCount() {
        return this._allowedDeviceCount;
    };
    /**
     * Gets the blockedDeviceCount property value. Total count of devices with Exchange Access State: Blocked.
     * @returns a integer
     */
    public get blockedDeviceCount() {
        return this._blockedDeviceCount;
    };
    /**
     * Gets the quarantinedDeviceCount property value. Total count of devices with Exchange Access State: Quarantined.
     * @returns a integer
     */
    public get quarantinedDeviceCount() {
        return this._quarantinedDeviceCount;
    };
    /**
     * Gets the unavailableDeviceCount property value. Total count of devices for which no Exchange Access State could be found.
     * @returns a integer
     */
    public get unavailableDeviceCount() {
        return this._unavailableDeviceCount;
    };
    /**
     * Gets the unknownDeviceCount property value. Total count of devices with Exchange Access State: Unknown.
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
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowedDeviceCount", (o, n) => { (o as unknown as DeviceExchangeAccessStateSummary).allowedDeviceCount = n.getNumberValue(); }],
            ["blockedDeviceCount", (o, n) => { (o as unknown as DeviceExchangeAccessStateSummary).blockedDeviceCount = n.getNumberValue(); }],
            ["quarantinedDeviceCount", (o, n) => { (o as unknown as DeviceExchangeAccessStateSummary).quarantinedDeviceCount = n.getNumberValue(); }],
            ["unavailableDeviceCount", (o, n) => { (o as unknown as DeviceExchangeAccessStateSummary).unavailableDeviceCount = n.getNumberValue(); }],
            ["unknownDeviceCount", (o, n) => { (o as unknown as DeviceExchangeAccessStateSummary).unknownDeviceCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("allowedDeviceCount", this.allowedDeviceCount);
        writer.writeNumberValue("blockedDeviceCount", this.blockedDeviceCount);
        writer.writeNumberValue("quarantinedDeviceCount", this.quarantinedDeviceCount);
        writer.writeNumberValue("unavailableDeviceCount", this.unavailableDeviceCount);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
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
     * Sets the allowedDeviceCount property value. Total count of devices with Exchange Access State: Allowed.
     * @param value Value to set for the allowedDeviceCount property.
     */
    public set allowedDeviceCount(value: number | undefined) {
        this._allowedDeviceCount = value;
    };
    /**
     * Sets the blockedDeviceCount property value. Total count of devices with Exchange Access State: Blocked.
     * @param value Value to set for the blockedDeviceCount property.
     */
    public set blockedDeviceCount(value: number | undefined) {
        this._blockedDeviceCount = value;
    };
    /**
     * Sets the quarantinedDeviceCount property value. Total count of devices with Exchange Access State: Quarantined.
     * @param value Value to set for the quarantinedDeviceCount property.
     */
    public set quarantinedDeviceCount(value: number | undefined) {
        this._quarantinedDeviceCount = value;
    };
    /**
     * Sets the unavailableDeviceCount property value. Total count of devices for which no Exchange Access State could be found.
     * @param value Value to set for the unavailableDeviceCount property.
     */
    public set unavailableDeviceCount(value: number | undefined) {
        this._unavailableDeviceCount = value;
    };
    /**
     * Sets the unknownDeviceCount property value. Total count of devices with Exchange Access State: Unknown.
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        this._unknownDeviceCount = value;
    };
}
