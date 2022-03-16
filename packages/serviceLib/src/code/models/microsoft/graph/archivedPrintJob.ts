import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {UserIdentity} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ArchivedPrintJob implements AdditionalDataHolder, Parsable {
    /** True if the job was acquired by a printer; false otherwise. Read-only.  */
    private _acquiredByPrinter?: boolean | undefined;
    /** The dateTimeOffset when the job was acquired by the printer, if any. Read-only.  */
    private _acquiredDateTime?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The dateTimeOffset when the job was completed, canceled or aborted. Read-only.  */
    private _completionDateTime?: Date | undefined;
    /** The number of copies that were printed. Read-only.  */
    private _copiesPrinted?: number | undefined;
    /** The user who created the print job. Read-only.  */
    private _createdBy?: UserIdentity | undefined;
    /** The dateTimeOffset when the job was created. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** The archived print job's GUID. Read-only.  */
    private _id?: string | undefined;
    /** The printer ID that the job was queued for. Read-only.  */
    private _printerId?: string | undefined;
    /** The print job's final processing state. Read-only.  */
    private _processingState?: PrintJobProcessingState | undefined;
    /**
     * Gets the acquiredByPrinter property value. True if the job was acquired by a printer; false otherwise. Read-only.
     * @returns a boolean
     */
    public get acquiredByPrinter() {
        return this._acquiredByPrinter;
    };
    /**
     * Sets the acquiredByPrinter property value. True if the job was acquired by a printer; false otherwise. Read-only.
     * @param value Value to set for the acquiredByPrinter property.
     */
    public set acquiredByPrinter(value: boolean | undefined) {
        this._acquiredByPrinter = value;
    };
    /**
     * Gets the acquiredDateTime property value. The dateTimeOffset when the job was acquired by the printer, if any. Read-only.
     * @returns a Date
     */
    public get acquiredDateTime() {
        return this._acquiredDateTime;
    };
    /**
     * Sets the acquiredDateTime property value. The dateTimeOffset when the job was acquired by the printer, if any. Read-only.
     * @param value Value to set for the acquiredDateTime property.
     */
    public set acquiredDateTime(value: Date | undefined) {
        this._acquiredDateTime = value;
    };
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
     * Gets the completionDateTime property value. The dateTimeOffset when the job was completed, canceled or aborted. Read-only.
     * @returns a Date
     */
    public get completionDateTime() {
        return this._completionDateTime;
    };
    /**
     * Sets the completionDateTime property value. The dateTimeOffset when the job was completed, canceled or aborted. Read-only.
     * @param value Value to set for the completionDateTime property.
     */
    public set completionDateTime(value: Date | undefined) {
        this._completionDateTime = value;
    };
    /**
     * Instantiates a new archivedPrintJob and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the copiesPrinted property value. The number of copies that were printed. Read-only.
     * @returns a integer
     */
    public get copiesPrinted() {
        return this._copiesPrinted;
    };
    /**
     * Sets the copiesPrinted property value. The number of copies that were printed. Read-only.
     * @param value Value to set for the copiesPrinted property.
     */
    public set copiesPrinted(value: number | undefined) {
        this._copiesPrinted = value;
    };
    /**
     * Gets the createdBy property value. The user who created the print job. Read-only.
     * @returns a userIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user who created the print job. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: UserIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The dateTimeOffset when the job was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The dateTimeOffset when the job was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["acquiredByPrinter", (o, n) => { (o as unknown as ArchivedPrintJob).acquiredByPrinter = n.getBooleanValue(); }],
            ["acquiredDateTime", (o, n) => { (o as unknown as ArchivedPrintJob).acquiredDateTime = n.getDateValue(); }],
            ["completionDateTime", (o, n) => { (o as unknown as ArchivedPrintJob).completionDateTime = n.getDateValue(); }],
            ["copiesPrinted", (o, n) => { (o as unknown as ArchivedPrintJob).copiesPrinted = n.getNumberValue(); }],
            ["createdBy", (o, n) => { (o as unknown as ArchivedPrintJob).createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as ArchivedPrintJob).createdDateTime = n.getDateValue(); }],
            ["id", (o, n) => { (o as unknown as ArchivedPrintJob).id = n.getStringValue(); }],
            ["printerId", (o, n) => { (o as unknown as ArchivedPrintJob).printerId = n.getStringValue(); }],
            ["processingState", (o, n) => { (o as unknown as ArchivedPrintJob).processingState = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); }],
        ]);
    };
    /**
     * Gets the id property value. The archived print job's GUID. Read-only.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The archived print job's GUID. Read-only.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the printerId property value. The printer ID that the job was queued for. Read-only.
     * @returns a string
     */
    public get printerId() {
        return this._printerId;
    };
    /**
     * Sets the printerId property value. The printer ID that the job was queued for. Read-only.
     * @param value Value to set for the printerId property.
     */
    public set printerId(value: string | undefined) {
        this._printerId = value;
    };
    /**
     * Gets the processingState property value. The print job's final processing state. Read-only.
     * @returns a printJobProcessingState
     */
    public get processingState() {
        return this._processingState;
    };
    /**
     * Sets the processingState property value. The print job's final processing state. Read-only.
     * @param value Value to set for the processingState property.
     */
    public set processingState(value: PrintJobProcessingState | undefined) {
        this._processingState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("acquiredByPrinter", this.acquiredByPrinter);
        writer.writeDateValue("acquiredDateTime", this.acquiredDateTime);
        writer.writeDateValue("completionDateTime", this.completionDateTime);
        writer.writeNumberValue("copiesPrinted", this.copiesPrinted);
        writer.writeObjectValue<UserIdentity>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("printerId", this.printerId);
        writer.writeEnumValue<PrintJobProcessingState>("processingState", this.processingState);
        writer.writeAdditionalData(this.additionalData);
    };
}
