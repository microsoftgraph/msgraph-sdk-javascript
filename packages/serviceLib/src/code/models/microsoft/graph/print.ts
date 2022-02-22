import {PrintConnector, Printer, PrinterShare, PrintOperation, PrintService, PrintSettings, PrintTaskDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Print implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The list of available print connectors.  */
    private _connectors?: PrintConnector[] | undefined;
    /** The list of print long running operations.  */
    private _operations?: PrintOperation[] | undefined;
    /** The list of printers registered in the tenant.  */
    private _printers?: Printer[] | undefined;
    /** The list of available Universal Print service endpoints.  */
    private _services?: PrintService[] | undefined;
    /** Tenant-wide settings for the Universal Print service.  */
    private _settings?: PrintSettings | undefined;
    /** The list of printer shares registered in the tenant.  */
    private _shares?: PrinterShare[] | undefined;
    /** List of abstract definition for a task that can be triggered when various events occur within Universal Print.  */
    private _taskDefinitions?: PrintTaskDefinition[] | undefined;
    /**
     * Instantiates a new Print and sets the default values.
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
     * Gets the connectors property value. The list of available print connectors.
     * @returns a printConnector
     */
    public get connectors() {
        return this._connectors;
    };
    /**
     * Gets the operations property value. The list of print long running operations.
     * @returns a printOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Gets the printers property value. The list of printers registered in the tenant.
     * @returns a printer
     */
    public get printers() {
        return this._printers;
    };
    /**
     * Gets the services property value. The list of available Universal Print service endpoints.
     * @returns a printService
     */
    public get services() {
        return this._services;
    };
    /**
     * Gets the settings property value. Tenant-wide settings for the Universal Print service.
     * @returns a printSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Gets the shares property value. The list of printer shares registered in the tenant.
     * @returns a printerShare
     */
    public get shares() {
        return this._shares;
    };
    /**
     * Gets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @returns a printTaskDefinition
     */
    public get taskDefinitions() {
        return this._taskDefinitions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["connectors", (o, n) => { (o as unknown as Print).connectors = n.getCollectionOfObjectValues<PrintConnector>(PrintConnector); }],
            ["operations", (o, n) => { (o as unknown as Print).operations = n.getCollectionOfObjectValues<PrintOperation>(PrintOperation); }],
            ["printers", (o, n) => { (o as unknown as Print).printers = n.getCollectionOfObjectValues<Printer>(Printer); }],
            ["services", (o, n) => { (o as unknown as Print).services = n.getCollectionOfObjectValues<PrintService>(PrintService); }],
            ["settings", (o, n) => { (o as unknown as Print).settings = n.getObjectValue<PrintSettings>(PrintSettings); }],
            ["shares", (o, n) => { (o as unknown as Print).shares = n.getCollectionOfObjectValues<PrinterShare>(PrinterShare); }],
            ["taskDefinitions", (o, n) => { (o as unknown as Print).taskDefinitions = n.getCollectionOfObjectValues<PrintTaskDefinition>(PrintTaskDefinition); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<PrintConnector>("connectors", this.connectors);
        writer.writeCollectionOfObjectValues<PrintOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<Printer>("printers", this.printers);
        writer.writeCollectionOfObjectValues<PrintService>("services", this.services);
        writer.writeObjectValue<PrintSettings>("settings", this.settings);
        writer.writeCollectionOfObjectValues<PrinterShare>("shares", this.shares);
        writer.writeCollectionOfObjectValues<PrintTaskDefinition>("taskDefinitions", this.taskDefinitions);
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
     * Sets the connectors property value. The list of available print connectors.
     * @param value Value to set for the connectors property.
     */
    public set connectors(value: PrintConnector[] | undefined) {
        this._connectors = value;
    };
    /**
     * Sets the operations property value. The list of print long running operations.
     * @param value Value to set for the operations property.
     */
    public set operations(value: PrintOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Sets the printers property value. The list of printers registered in the tenant.
     * @param value Value to set for the printers property.
     */
    public set printers(value: Printer[] | undefined) {
        this._printers = value;
    };
    /**
     * Sets the services property value. The list of available Universal Print service endpoints.
     * @param value Value to set for the services property.
     */
    public set services(value: PrintService[] | undefined) {
        this._services = value;
    };
    /**
     * Sets the settings property value. Tenant-wide settings for the Universal Print service.
     * @param value Value to set for the settings property.
     */
    public set settings(value: PrintSettings | undefined) {
        this._settings = value;
    };
    /**
     * Sets the shares property value. The list of printer shares registered in the tenant.
     * @param value Value to set for the shares property.
     */
    public set shares(value: PrinterShare[] | undefined) {
        this._shares = value;
    };
    /**
     * Sets the taskDefinitions property value. List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     * @param value Value to set for the taskDefinitions property.
     */
    public set taskDefinitions(value: PrintTaskDefinition[] | undefined) {
        this._taskDefinitions = value;
    };
}
