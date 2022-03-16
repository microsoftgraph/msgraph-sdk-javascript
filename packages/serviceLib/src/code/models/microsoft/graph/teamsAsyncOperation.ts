import {createOperationErrorFromDiscriminatorValue} from './createOperationErrorFromDiscriminatorValue';
import {Entity, OperationError} from './index';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAsyncOperation extends Entity implements Parsable {
    /** Number of times the operation was attempted before being marked successful or failed.  */
    private _attemptsCount?: number | undefined;
    /** Time when the operation was created.  */
    private _createdDateTime?: Date | undefined;
    /** Any error that causes the async operation to fail.  */
    private _error_escaped?: OperationError | undefined;
    /** Time when the async operation was last updated.  */
    private _lastActionDateTime?: Date | undefined;
    /** Denotes which type of operation is being described.  */
    private _operationType?: TeamsAsyncOperationType | undefined;
    /** Operation status.  */
    private _status?: TeamsAsyncOperationStatus | undefined;
    /** The ID of the object that's created or modified as result of this async operation, typically a team.  */
    private _targetResourceId?: string | undefined;
    /** The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.  */
    private _targetResourceLocation?: string | undefined;
    /**
     * Gets the attemptsCount property value. Number of times the operation was attempted before being marked successful or failed.
     * @returns a integer
     */
    public get attemptsCount() {
        return this._attemptsCount;
    };
    /**
     * Sets the attemptsCount property value. Number of times the operation was attempted before being marked successful or failed.
     * @param value Value to set for the attemptsCount property.
     */
    public set attemptsCount(value: number | undefined) {
        this._attemptsCount = value;
    };
    /**
     * Instantiates a new teamsAsyncOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Time when the operation was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Time when the operation was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the error property value. Any error that causes the async operation to fail.
     * @returns a operationError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Any error that causes the async operation to fail.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: OperationError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["attemptsCount", (o, n) => { (o as unknown as TeamsAsyncOperation).attemptsCount = n.getNumberValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as TeamsAsyncOperation).createdDateTime = n.getDateValue(); }],
            ["error", (o, n) => { (o as unknown as TeamsAsyncOperation).error_escaped = n.getObjectValue<OperationError>(createOperationErrorFromDiscriminatorValue); }],
            ["lastActionDateTime", (o, n) => { (o as unknown as TeamsAsyncOperation).lastActionDateTime = n.getDateValue(); }],
            ["operationType", (o, n) => { (o as unknown as TeamsAsyncOperation).operationType = n.getEnumValue<TeamsAsyncOperationType>(TeamsAsyncOperationType); }],
            ["status", (o, n) => { (o as unknown as TeamsAsyncOperation).status = n.getEnumValue<TeamsAsyncOperationStatus>(TeamsAsyncOperationStatus); }],
            ["targetResourceId", (o, n) => { (o as unknown as TeamsAsyncOperation).targetResourceId = n.getStringValue(); }],
            ["targetResourceLocation", (o, n) => { (o as unknown as TeamsAsyncOperation).targetResourceLocation = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the lastActionDateTime property value. Time when the async operation was last updated.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Sets the lastActionDateTime property value. Time when the async operation was last updated.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        this._lastActionDateTime = value;
    };
    /**
     * Gets the operationType property value. Denotes which type of operation is being described.
     * @returns a teamsAsyncOperationType
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Sets the operationType property value. Denotes which type of operation is being described.
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: TeamsAsyncOperationType | undefined) {
        this._operationType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("attemptsCount", this.attemptsCount);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<OperationError>("error", this.error_escaped);
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        writer.writeEnumValue<TeamsAsyncOperationType>("operationType", this.operationType);
        writer.writeEnumValue<TeamsAsyncOperationStatus>("status", this.status);
        writer.writeStringValue("targetResourceId", this.targetResourceId);
        writer.writeStringValue("targetResourceLocation", this.targetResourceLocation);
    };
    /**
     * Gets the status property value. Operation status.
     * @returns a teamsAsyncOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Operation status.
     * @param value Value to set for the status property.
     */
    public set status(value: TeamsAsyncOperationStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the targetResourceId property value. The ID of the object that's created or modified as result of this async operation, typically a team.
     * @returns a string
     */
    public get targetResourceId() {
        return this._targetResourceId;
    };
    /**
     * Sets the targetResourceId property value. The ID of the object that's created or modified as result of this async operation, typically a team.
     * @param value Value to set for the targetResourceId property.
     */
    public set targetResourceId(value: string | undefined) {
        this._targetResourceId = value;
    };
    /**
     * Gets the targetResourceLocation property value. The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
     * @returns a string
     */
    public get targetResourceLocation() {
        return this._targetResourceLocation;
    };
    /**
     * Sets the targetResourceLocation property value. The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
     * @param value Value to set for the targetResourceLocation property.
     */
    public set targetResourceLocation(value: string | undefined) {
        this._targetResourceLocation = value;
    };
}
