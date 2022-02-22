import {DataPolicyOperationStatus, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DataPolicyOperation extends Entity implements Parsable {
    /** Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes.  */
    private _completedDateTime?: Date | undefined;
    /** Specifies the progress of an operation.  */
    private _progress?: number | undefined;
    /** Possible values are: notStarted, running, complete, failed, unknownFutureValue.  */
    private _status?: DataPolicyOperationStatus | undefined;
    /** The URL location to where data is being exported for export requests.  */
    private _storageLocation?: string | undefined;
    /** Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _submittedDateTime?: Date | undefined;
    /** The id for the user on whom the operation is performed.  */
    private _userId?: string | undefined;
    /**
     * Instantiates a new dataPolicyOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the completedDateTime property value. Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes.
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Gets the progress property value. Specifies the progress of an operation.
     * @returns a double
     */
    public get progress() {
        return this._progress;
    };
    /**
     * Gets the status property value. Possible values are: notStarted, running, complete, failed, unknownFutureValue.
     * @returns a dataPolicyOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the storageLocation property value. The URL location to where data is being exported for export requests.
     * @returns a string
     */
    public get storageLocation() {
        return this._storageLocation;
    };
    /**
     * Gets the submittedDateTime property value. Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get submittedDateTime() {
        return this._submittedDateTime;
    };
    /**
     * Gets the userId property value. The id for the user on whom the operation is performed.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["completedDateTime", (o, n) => { (o as unknown as DataPolicyOperation).completedDateTime = n.getDateValue(); }],
            ["progress", (o, n) => { (o as unknown as DataPolicyOperation).progress = n.getNumberValue(); }],
            ["status", (o, n) => { (o as unknown as DataPolicyOperation).status = n.getEnumValue<DataPolicyOperationStatus>(DataPolicyOperationStatus); }],
            ["storageLocation", (o, n) => { (o as unknown as DataPolicyOperation).storageLocation = n.getStringValue(); }],
            ["submittedDateTime", (o, n) => { (o as unknown as DataPolicyOperation).submittedDateTime = n.getDateValue(); }],
            ["userId", (o, n) => { (o as unknown as DataPolicyOperation).userId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeNumberValue("progress", this.progress);
        writer.writeEnumValue<DataPolicyOperationStatus>("status", this.status);
        writer.writeStringValue("storageLocation", this.storageLocation);
        writer.writeDateValue("submittedDateTime", this.submittedDateTime);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Sets the completedDateTime property value. Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Sets the progress property value. Specifies the progress of an operation.
     * @param value Value to set for the progress property.
     */
    public set progress(value: number | undefined) {
        this._progress = value;
    };
    /**
     * Sets the status property value. Possible values are: notStarted, running, complete, failed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: DataPolicyOperationStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the storageLocation property value. The URL location to where data is being exported for export requests.
     * @param value Value to set for the storageLocation property.
     */
    public set storageLocation(value: string | undefined) {
        this._storageLocation = value;
    };
    /**
     * Sets the submittedDateTime property value. Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the submittedDateTime property.
     */
    public set submittedDateTime(value: Date | undefined) {
        this._submittedDateTime = value;
    };
    /**
     * Sets the userId property value. The id for the user on whom the operation is performed.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
