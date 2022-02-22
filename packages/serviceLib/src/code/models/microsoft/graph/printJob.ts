import {Entity, PrintDocument, PrintJobConfiguration, PrintJobStatus, PrintTask, UserIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintJob extends Entity implements Parsable {
    private _configuration?: PrintJobConfiguration | undefined;
    /** Read-only. Nullable.  */
    private _createdBy?: UserIdentity | undefined;
    /** The DateTimeOffset when the job was created. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** Read-only.  */
    private _documents?: PrintDocument[] | undefined;
    /** If true, document can be fetched by printer.  */
    private _isFetchable?: boolean | undefined;
    /** Contains the source job URL, if the job has been redirected from another printer.  */
    private _redirectedFrom?: string | undefined;
    /** Contains the destination job URL, if the job has been redirected to another printer.  */
    private _redirectedTo?: string | undefined;
    private _status?: PrintJobStatus | undefined;
    /** A list of printTasks that were triggered by this print job.  */
    private _tasks?: PrintTask[] | undefined;
    /**
     * Instantiates a new printJob and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the configuration property value. 
     * @returns a printJobConfiguration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Gets the createdBy property value. Read-only. Nullable.
     * @returns a userIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the job was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the documents property value. Read-only.
     * @returns a printDocument
     */
    public get documents() {
        return this._documents;
    };
    /**
     * Gets the isFetchable property value. If true, document can be fetched by printer.
     * @returns a boolean
     */
    public get isFetchable() {
        return this._isFetchable;
    };
    /**
     * Gets the redirectedFrom property value. Contains the source job URL, if the job has been redirected from another printer.
     * @returns a string
     */
    public get redirectedFrom() {
        return this._redirectedFrom;
    };
    /**
     * Gets the redirectedTo property value. Contains the destination job URL, if the job has been redirected to another printer.
     * @returns a string
     */
    public get redirectedTo() {
        return this._redirectedTo;
    };
    /**
     * Gets the status property value. 
     * @returns a printJobStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the tasks property value. A list of printTasks that were triggered by this print job.
     * @returns a printTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["configuration", (o, n) => { (o as unknown as PrintJob).configuration = n.getObjectValue<PrintJobConfiguration>(PrintJobConfiguration); }],
            ["createdBy", (o, n) => { (o as unknown as PrintJob).createdBy = n.getObjectValue<UserIdentity>(UserIdentity); }],
            ["createdDateTime", (o, n) => { (o as unknown as PrintJob).createdDateTime = n.getDateValue(); }],
            ["documents", (o, n) => { (o as unknown as PrintJob).documents = n.getCollectionOfObjectValues<PrintDocument>(PrintDocument); }],
            ["isFetchable", (o, n) => { (o as unknown as PrintJob).isFetchable = n.getBooleanValue(); }],
            ["redirectedFrom", (o, n) => { (o as unknown as PrintJob).redirectedFrom = n.getStringValue(); }],
            ["redirectedTo", (o, n) => { (o as unknown as PrintJob).redirectedTo = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as PrintJob).status = n.getObjectValue<PrintJobStatus>(PrintJobStatus); }],
            ["tasks", (o, n) => { (o as unknown as PrintJob).tasks = n.getCollectionOfObjectValues<PrintTask>(PrintTask); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrintJobConfiguration>("configuration", this.configuration);
        writer.writeObjectValue<UserIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues<PrintDocument>("documents", this.documents);
        writer.writeBooleanValue("isFetchable", this.isFetchable);
        writer.writeStringValue("redirectedFrom", this.redirectedFrom);
        writer.writeStringValue("redirectedTo", this.redirectedTo);
        writer.writeObjectValue<PrintJobStatus>("status", this.status);
        writer.writeCollectionOfObjectValues<PrintTask>("tasks", this.tasks);
    };
    /**
     * Sets the configuration property value. 
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: PrintJobConfiguration | undefined) {
        this._configuration = value;
    };
    /**
     * Sets the createdBy property value. Read-only. Nullable.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the job was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the documents property value. Read-only.
     * @param value Value to set for the documents property.
     */
    public set documents(value: PrintDocument[] | undefined) {
        this._documents = value;
    };
    /**
     * Sets the isFetchable property value. If true, document can be fetched by printer.
     * @param value Value to set for the isFetchable property.
     */
    public set isFetchable(value: boolean | undefined) {
        this._isFetchable = value;
    };
    /**
     * Sets the redirectedFrom property value. Contains the source job URL, if the job has been redirected from another printer.
     * @param value Value to set for the redirectedFrom property.
     */
    public set redirectedFrom(value: string | undefined) {
        this._redirectedFrom = value;
    };
    /**
     * Sets the redirectedTo property value. Contains the destination job URL, if the job has been redirected to another printer.
     * @param value Value to set for the redirectedTo property.
     */
    public set redirectedTo(value: string | undefined) {
        this._redirectedTo = value;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: PrintJobStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the tasks property value. A list of printTasks that were triggered by this print job.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PrintTask[] | undefined) {
        this._tasks = value;
    };
}
