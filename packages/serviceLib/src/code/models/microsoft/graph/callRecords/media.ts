import {DeviceInfo, MediaStream, NetworkInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Media implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Device information associated with the callee endpoint of this media.  */
    private _calleeDevice?: DeviceInfo | undefined;
    /** Network information associated with the callee endpoint of this media.  */
    private _calleeNetwork?: NetworkInfo | undefined;
    /** Device information associated with the caller endpoint of this media.  */
    private _callerDevice?: DeviceInfo | undefined;
    /** Network information associated with the caller endpoint of this media.  */
    private _callerNetwork?: NetworkInfo | undefined;
    /** How the media was identified during media negotiation stage.  */
    private _label?: string | undefined;
    /** Network streams associated with this media.  */
    private _streams?: MediaStream[] | undefined;
    /**
     * Instantiates a new media and sets the default values.
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
     * Gets the calleeDevice property value. Device information associated with the callee endpoint of this media.
     * @returns a deviceInfo
     */
    public get calleeDevice() {
        return this._calleeDevice;
    };
    /**
     * Gets the calleeNetwork property value. Network information associated with the callee endpoint of this media.
     * @returns a networkInfo
     */
    public get calleeNetwork() {
        return this._calleeNetwork;
    };
    /**
     * Gets the callerDevice property value. Device information associated with the caller endpoint of this media.
     * @returns a deviceInfo
     */
    public get callerDevice() {
        return this._callerDevice;
    };
    /**
     * Gets the callerNetwork property value. Network information associated with the caller endpoint of this media.
     * @returns a networkInfo
     */
    public get callerNetwork() {
        return this._callerNetwork;
    };
    /**
     * Gets the label property value. How the media was identified during media negotiation stage.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Gets the streams property value. Network streams associated with this media.
     * @returns a mediaStream
     */
    public get streams() {
        return this._streams;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["calleeDevice", (o, n) => { (o as unknown as Media).calleeDevice = n.getObjectValue<DeviceInfo>(DeviceInfo); }],
            ["calleeNetwork", (o, n) => { (o as unknown as Media).calleeNetwork = n.getObjectValue<NetworkInfo>(NetworkInfo); }],
            ["callerDevice", (o, n) => { (o as unknown as Media).callerDevice = n.getObjectValue<DeviceInfo>(DeviceInfo); }],
            ["callerNetwork", (o, n) => { (o as unknown as Media).callerNetwork = n.getObjectValue<NetworkInfo>(NetworkInfo); }],
            ["label", (o, n) => { (o as unknown as Media).label = n.getStringValue(); }],
            ["streams", (o, n) => { (o as unknown as Media).streams = n.getCollectionOfObjectValues<MediaStream>(MediaStream); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DeviceInfo>("calleeDevice", this.calleeDevice);
        writer.writeObjectValue<NetworkInfo>("calleeNetwork", this.calleeNetwork);
        writer.writeObjectValue<DeviceInfo>("callerDevice", this.callerDevice);
        writer.writeObjectValue<NetworkInfo>("callerNetwork", this.callerNetwork);
        writer.writeStringValue("label", this.label);
        writer.writeCollectionOfObjectValues<MediaStream>("streams", this.streams);
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
     * Sets the calleeDevice property value. Device information associated with the callee endpoint of this media.
     * @param value Value to set for the calleeDevice property.
     */
    public set calleeDevice(value: DeviceInfo | undefined) {
        this._calleeDevice = value;
    };
    /**
     * Sets the calleeNetwork property value. Network information associated with the callee endpoint of this media.
     * @param value Value to set for the calleeNetwork property.
     */
    public set calleeNetwork(value: NetworkInfo | undefined) {
        this._calleeNetwork = value;
    };
    /**
     * Sets the callerDevice property value. Device information associated with the caller endpoint of this media.
     * @param value Value to set for the callerDevice property.
     */
    public set callerDevice(value: DeviceInfo | undefined) {
        this._callerDevice = value;
    };
    /**
     * Sets the callerNetwork property value. Network information associated with the caller endpoint of this media.
     * @param value Value to set for the callerNetwork property.
     */
    public set callerNetwork(value: NetworkInfo | undefined) {
        this._callerNetwork = value;
    };
    /**
     * Sets the label property value. How the media was identified during media negotiation stage.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Sets the streams property value. Network streams associated with this media.
     * @param value Value to set for the streams property.
     */
    public set streams(value: MediaStream[] | undefined) {
        this._streams = value;
    };
}
