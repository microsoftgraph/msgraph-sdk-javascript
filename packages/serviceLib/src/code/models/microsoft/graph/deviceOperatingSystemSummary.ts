import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device operating system summary.  */
export class DeviceOperatingSystemSummary implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Number of android device count.  */
    private _androidCount?: number | undefined;
    /** Number of iOS device count.  */
    private _iosCount?: number | undefined;
    /** Number of Mac OS X device count.  */
    private _macOSCount?: number | undefined;
    /** Number of unknown device count.  */
    private _unknownCount?: number | undefined;
    /** Number of Windows device count.  */
    private _windowsCount?: number | undefined;
    /** Number of Windows mobile device count.  */
    private _windowsMobileCount?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the androidCount property value. Number of android device count.
     * @returns a integer
     */
    public get androidCount() {
        return this._androidCount;
    };
    /**
     * Sets the androidCount property value. Number of android device count.
     * @param value Value to set for the androidCount property.
     */
    public set androidCount(value: number | undefined) {
        this._androidCount = value;
    };
    /**
     * Instantiates a new deviceOperatingSystemSummary and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["androidCount", (o, n) => { (o as unknown as DeviceOperatingSystemSummary).androidCount = n.getNumberValue(); }],
            ["iosCount", (o, n) => { (o as unknown as DeviceOperatingSystemSummary).iosCount = n.getNumberValue(); }],
            ["macOSCount", (o, n) => { (o as unknown as DeviceOperatingSystemSummary).macOSCount = n.getNumberValue(); }],
            ["unknownCount", (o, n) => { (o as unknown as DeviceOperatingSystemSummary).unknownCount = n.getNumberValue(); }],
            ["windowsCount", (o, n) => { (o as unknown as DeviceOperatingSystemSummary).windowsCount = n.getNumberValue(); }],
            ["windowsMobileCount", (o, n) => { (o as unknown as DeviceOperatingSystemSummary).windowsMobileCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the iosCount property value. Number of iOS device count.
     * @returns a integer
     */
    public get iosCount() {
        return this._iosCount;
    };
    /**
     * Sets the iosCount property value. Number of iOS device count.
     * @param value Value to set for the iosCount property.
     */
    public set iosCount(value: number | undefined) {
        this._iosCount = value;
    };
    /**
     * Gets the macOSCount property value. Number of Mac OS X device count.
     * @returns a integer
     */
    public get macOSCount() {
        return this._macOSCount;
    };
    /**
     * Sets the macOSCount property value. Number of Mac OS X device count.
     * @param value Value to set for the macOSCount property.
     */
    public set macOSCount(value: number | undefined) {
        this._macOSCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("androidCount", this.androidCount);
        writer.writeNumberValue("iosCount", this.iosCount);
        writer.writeNumberValue("macOSCount", this.macOSCount);
        writer.writeNumberValue("unknownCount", this.unknownCount);
        writer.writeNumberValue("windowsCount", this.windowsCount);
        writer.writeNumberValue("windowsMobileCount", this.windowsMobileCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the unknownCount property value. Number of unknown device count.
     * @returns a integer
     */
    public get unknownCount() {
        return this._unknownCount;
    };
    /**
     * Sets the unknownCount property value. Number of unknown device count.
     * @param value Value to set for the unknownCount property.
     */
    public set unknownCount(value: number | undefined) {
        this._unknownCount = value;
    };
    /**
     * Gets the windowsCount property value. Number of Windows device count.
     * @returns a integer
     */
    public get windowsCount() {
        return this._windowsCount;
    };
    /**
     * Sets the windowsCount property value. Number of Windows device count.
     * @param value Value to set for the windowsCount property.
     */
    public set windowsCount(value: number | undefined) {
        this._windowsCount = value;
    };
    /**
     * Gets the windowsMobileCount property value. Number of Windows mobile device count.
     * @returns a integer
     */
    public get windowsMobileCount() {
        return this._windowsMobileCount;
    };
    /**
     * Sets the windowsMobileCount property value. Number of Windows mobile device count.
     * @param value Value to set for the windowsMobileCount property.
     */
    public set windowsMobileCount(value: number | undefined) {
        this._windowsMobileCount = value;
    };
}
