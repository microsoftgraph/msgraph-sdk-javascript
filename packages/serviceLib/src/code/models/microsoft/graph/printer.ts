import {PrintConnector, PrinterBase, PrinterShare, PrintTaskTrigger} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Printer extends PrinterBase implements Parsable {
    /** The connectors that are associated with the printer.  */
    private _connectors?: PrintConnector[] | undefined;
    /** True if the printer has a physical device for printing. Read-only.  */
    private _hasPhysicalDevice?: boolean | undefined;
    /** True if the printer is shared; false otherwise. Read-only.  */
    private _isShared?: boolean | undefined;
    /** The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.  */
    private _lastSeenDateTime?: Date | undefined;
    /** The DateTimeOffset when the printer was registered. Read-only.  */
    private _registeredDateTime?: Date | undefined;
    /** The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.  */
    private _shares?: PrinterShare[] | undefined;
    /** A list of task triggers that are associated with the printer.  */
    private _taskTriggers?: PrintTaskTrigger[] | undefined;
    /**
     * Instantiates a new printer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the connectors property value. The connectors that are associated with the printer.
     * @returns a printConnector
     */
    public get connectors() {
        return this._connectors;
    };
    /**
     * Gets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
     * @returns a boolean
     */
    public get hasPhysicalDevice() {
        return this._hasPhysicalDevice;
    };
    /**
     * Gets the isShared property value. True if the printer is shared; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Gets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     * @returns a Date
     */
    public get lastSeenDateTime() {
        return this._lastSeenDateTime;
    };
    /**
     * Gets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
     * @returns a Date
     */
    public get registeredDateTime() {
        return this._registeredDateTime;
    };
    /**
     * Gets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @returns a printerShare
     */
    public get shares() {
        return this._shares;
    };
    /**
     * Gets the taskTriggers property value. A list of task triggers that are associated with the printer.
     * @returns a printTaskTrigger
     */
    public get taskTriggers() {
        return this._taskTriggers;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["connectors", (o, n) => { (o as unknown as Printer).connectors = n.getCollectionOfObjectValues<PrintConnector>(PrintConnector); }],
            ["hasPhysicalDevice", (o, n) => { (o as unknown as Printer).hasPhysicalDevice = n.getBooleanValue(); }],
            ["isShared", (o, n) => { (o as unknown as Printer).isShared = n.getBooleanValue(); }],
            ["lastSeenDateTime", (o, n) => { (o as unknown as Printer).lastSeenDateTime = n.getDateValue(); }],
            ["registeredDateTime", (o, n) => { (o as unknown as Printer).registeredDateTime = n.getDateValue(); }],
            ["shares", (o, n) => { (o as unknown as Printer).shares = n.getCollectionOfObjectValues<PrinterShare>(PrinterShare); }],
            ["taskTriggers", (o, n) => { (o as unknown as Printer).taskTriggers = n.getCollectionOfObjectValues<PrintTaskTrigger>(PrintTaskTrigger); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PrintConnector>("connectors", this.connectors);
        writer.writeBooleanValue("hasPhysicalDevice", this.hasPhysicalDevice);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeDateValue("lastSeenDateTime", this.lastSeenDateTime);
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
        writer.writeCollectionOfObjectValues<PrinterShare>("shares", this.shares);
        writer.writeCollectionOfObjectValues<PrintTaskTrigger>("taskTriggers", this.taskTriggers);
    };
    /**
     * Sets the connectors property value. The connectors that are associated with the printer.
     * @param value Value to set for the connectors property.
     */
    public set connectors(value: PrintConnector[] | undefined) {
        this._connectors = value;
    };
    /**
     * Sets the hasPhysicalDevice property value. True if the printer has a physical device for printing. Read-only.
     * @param value Value to set for the hasPhysicalDevice property.
     */
    public set hasPhysicalDevice(value: boolean | undefined) {
        this._hasPhysicalDevice = value;
    };
    /**
     * Sets the isShared property value. True if the printer is shared; false otherwise. Read-only.
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Sets the lastSeenDateTime property value. The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     * @param value Value to set for the lastSeenDateTime property.
     */
    public set lastSeenDateTime(value: Date | undefined) {
        this._lastSeenDateTime = value;
    };
    /**
     * Sets the registeredDateTime property value. The DateTimeOffset when the printer was registered. Read-only.
     * @param value Value to set for the registeredDateTime property.
     */
    public set registeredDateTime(value: Date | undefined) {
        this._registeredDateTime = value;
    };
    /**
     * Sets the shares property value. The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     * @param value Value to set for the shares property.
     */
    public set shares(value: PrinterShare[] | undefined) {
        this._shares = value;
    };
    /**
     * Sets the taskTriggers property value. A list of task triggers that are associated with the printer.
     * @param value Value to set for the taskTriggers property.
     */
    public set taskTriggers(value: PrintTaskTrigger[] | undefined) {
        this._taskTriggers = value;
    };
}
