import {PrintJobProcessingState} from './printJobProcessingState';
import {PrintJobStateDetail} from './printJobStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintJobStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A human-readable description of the print job's current processing state. Read-only.  */
    private _description?: string | undefined;
    /** Additional details for print job state. Valid values are described in the following table. Read-only.  */
    private _details?: PrintJobStateDetail[] | undefined;
    /** True if the job was acknowledged by a printer; false otherwise. Read-only.  */
    private _isAcquiredByPrinter?: boolean | undefined;
    /** The print job's current processing state. Valid values are described in the following table. Read-only.  */
    private _state?: PrintJobProcessingState | undefined;
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
     * Instantiates a new printJobStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the description property value. A human-readable description of the print job's current processing state. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the print job's current processing state. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the details property value. Additional details for print job state. Valid values are described in the following table. Read-only.
     * @returns a printJobStateDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Additional details for print job state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the details property.
     */
    public set details(value: PrintJobStateDetail[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["description", (o, n) => { (o as unknown as PrintJobStatus).description = n.getStringValue(); }],
            ["details", (o, n) => { (o as unknown as PrintJobStatus).details = n.getEnumValues<PrintJobStateDetail>(PrintJobStateDetail); }],
            ["isAcquiredByPrinter", (o, n) => { (o as unknown as PrintJobStatus).isAcquiredByPrinter = n.getBooleanValue(); }],
            ["state", (o, n) => { (o as unknown as PrintJobStatus).state = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); }],
        ]);
    };
    /**
     * Gets the isAcquiredByPrinter property value. True if the job was acknowledged by a printer; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isAcquiredByPrinter() {
        return this._isAcquiredByPrinter;
    };
    /**
     * Sets the isAcquiredByPrinter property value. True if the job was acknowledged by a printer; false otherwise. Read-only.
     * @param value Value to set for the isAcquiredByPrinter property.
     */
    public set isAcquiredByPrinter(value: boolean | undefined) {
        this._isAcquiredByPrinter = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        this.details && writer.writeEnumValue<PrintJobStateDetail>("details", ...this.details);
        writer.writeBooleanValue("isAcquiredByPrinter", this.isAcquiredByPrinter);
        writer.writeEnumValue<PrintJobProcessingState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The print job's current processing state. Valid values are described in the following table. Read-only.
     * @returns a printJobProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The print job's current processing state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the state property.
     */
    public set state(value: PrintJobProcessingState | undefined) {
        this._state = value;
    };
}
