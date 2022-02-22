import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainState implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes.  */
    private _lastActionDateTime?: Date | undefined;
    /** Type of asynchronous operation. The values can be ForceDelete or Verification  */
    private _operation?: string | undefined;
    /** Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed.  */
    private _status?: string | undefined;
    /**
     * Instantiates a new domainState and sets the default values.
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
     * Gets the lastActionDateTime property value. Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Gets the operation property value. Type of asynchronous operation. The values can be ForceDelete or Verification
     * @returns a string
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Gets the status property value. Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed.
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["lastActionDateTime", (o, n) => { (o as unknown as DomainState).lastActionDateTime = n.getDateValue(); }],
            ["operation", (o, n) => { (o as unknown as DomainState).operation = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as DomainState).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        writer.writeStringValue("operation", this.operation);
        writer.writeStringValue("status", this.status);
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
     * Sets the lastActionDateTime property value. Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous task starts, and when the operation completes.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        this._lastActionDateTime = value;
    };
    /**
     * Sets the operation property value. Type of asynchronous operation. The values can be ForceDelete or Verification
     * @param value Value to set for the operation property.
     */
    public set operation(value: string | undefined) {
        this._operation = value;
    };
    /**
     * Sets the status property value. Current status of the operation.  Scheduled - Operation has been scheduled but has not started.  InProgress - Task has started and is in progress.  Failed - Operation has failed.
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
