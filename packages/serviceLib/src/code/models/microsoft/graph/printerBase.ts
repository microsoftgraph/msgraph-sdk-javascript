import {Entity, PrinterCapabilities, PrinterDefaults, PrinterLocation, PrinterStatus, PrintJob} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterBase extends Entity implements Parsable {
    /** The capabilities of the printer/printerShare.  */
    private _capabilities?: PrinterCapabilities | undefined;
    /** The default print settings of printer/printerShare.  */
    private _defaults?: PrinterDefaults | undefined;
    /** The name of the printer/printerShare.  */
    private _displayName?: string | undefined;
    /** Whether the printer/printerShare is currently accepting new print jobs.  */
    private _isAcceptingJobs?: boolean | undefined;
    /** The list of jobs that are queued for printing by the printer/printerShare.  */
    private _jobs?: PrintJob[] | undefined;
    /** The physical and/or organizational location of the printer/printerShare.  */
    private _location?: PrinterLocation | undefined;
    /** The manufacturer of the printer/printerShare.  */
    private _manufacturer?: string | undefined;
    /** The model name of the printer/printerShare.  */
    private _model?: string | undefined;
    private _status?: PrinterStatus | undefined;
    /**
     * Instantiates a new printerBase and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the capabilities property value. The capabilities of the printer/printerShare.
     * @returns a printerCapabilities
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Gets the defaults property value. The default print settings of printer/printerShare.
     * @returns a printerDefaults
     */
    public get defaults() {
        return this._defaults;
    };
    /**
     * Gets the displayName property value. The name of the printer/printerShare.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the isAcceptingJobs property value. Whether the printer/printerShare is currently accepting new print jobs.
     * @returns a boolean
     */
    public get isAcceptingJobs() {
        return this._isAcceptingJobs;
    };
    /**
     * Gets the jobs property value. The list of jobs that are queued for printing by the printer/printerShare.
     * @returns a printJob
     */
    public get jobs() {
        return this._jobs;
    };
    /**
     * Gets the location property value. The physical and/or organizational location of the printer/printerShare.
     * @returns a printerLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Gets the manufacturer property value. The manufacturer of the printer/printerShare.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Gets the model property value. The model name of the printer/printerShare.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Gets the status property value. 
     * @returns a printerStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["capabilities", (o, n) => { (o as unknown as PrinterBase).capabilities = n.getObjectValue<PrinterCapabilities>(PrinterCapabilities); }],
            ["defaults", (o, n) => { (o as unknown as PrinterBase).defaults = n.getObjectValue<PrinterDefaults>(PrinterDefaults); }],
            ["displayName", (o, n) => { (o as unknown as PrinterBase).displayName = n.getStringValue(); }],
            ["isAcceptingJobs", (o, n) => { (o as unknown as PrinterBase).isAcceptingJobs = n.getBooleanValue(); }],
            ["jobs", (o, n) => { (o as unknown as PrinterBase).jobs = n.getCollectionOfObjectValues<PrintJob>(PrintJob); }],
            ["location", (o, n) => { (o as unknown as PrinterBase).location = n.getObjectValue<PrinterLocation>(PrinterLocation); }],
            ["manufacturer", (o, n) => { (o as unknown as PrinterBase).manufacturer = n.getStringValue(); }],
            ["model", (o, n) => { (o as unknown as PrinterBase).model = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as PrinterBase).status = n.getObjectValue<PrinterStatus>(PrinterStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrinterCapabilities>("capabilities", this.capabilities);
        writer.writeObjectValue<PrinterDefaults>("defaults", this.defaults);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isAcceptingJobs", this.isAcceptingJobs);
        writer.writeCollectionOfObjectValues<PrintJob>("jobs", this.jobs);
        writer.writeObjectValue<PrinterLocation>("location", this.location);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeObjectValue<PrinterStatus>("status", this.status);
    };
    /**
     * Sets the capabilities property value. The capabilities of the printer/printerShare.
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: PrinterCapabilities | undefined) {
        this._capabilities = value;
    };
    /**
     * Sets the defaults property value. The default print settings of printer/printerShare.
     * @param value Value to set for the defaults property.
     */
    public set defaults(value: PrinterDefaults | undefined) {
        this._defaults = value;
    };
    /**
     * Sets the displayName property value. The name of the printer/printerShare.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the isAcceptingJobs property value. Whether the printer/printerShare is currently accepting new print jobs.
     * @param value Value to set for the isAcceptingJobs property.
     */
    public set isAcceptingJobs(value: boolean | undefined) {
        this._isAcceptingJobs = value;
    };
    /**
     * Sets the jobs property value. The list of jobs that are queued for printing by the printer/printerShare.
     * @param value Value to set for the jobs property.
     */
    public set jobs(value: PrintJob[] | undefined) {
        this._jobs = value;
    };
    /**
     * Sets the location property value. The physical and/or organizational location of the printer/printerShare.
     * @param value Value to set for the location property.
     */
    public set location(value: PrinterLocation | undefined) {
        this._location = value;
    };
    /**
     * Sets the manufacturer property value. The manufacturer of the printer/printerShare.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Sets the model property value. The model name of the printer/printerShare.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: PrinterStatus | undefined) {
        this._status = value;
    };
}
