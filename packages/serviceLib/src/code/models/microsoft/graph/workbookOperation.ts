import {createWorkbookOperationErrorFromDiscriminatorValue} from './createWorkbookOperationErrorFromDiscriminatorValue';
import {Entity, WorkbookOperationError} from './index';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookOperation extends Entity implements Parsable {
    /** The error returned by the operation.  */
    private _error_escaped?: WorkbookOperationError | undefined;
    /** The resource URI for the result.  */
    private _resourceLocation?: string | undefined;
    /** The current status of the operation. Possible values are: NotStarted, Running, Completed, Failed.  */
    private _status?: WorkbookOperationStatus | undefined;
    /**
     * Instantiates a new workbookOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. The error returned by the operation.
     * @returns a workbookOperationError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error returned by the operation.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: WorkbookOperationError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["error", (o, n) => { (o as unknown as WorkbookOperation).error_escaped = n.getObjectValue<WorkbookOperationError>(createWorkbookOperationErrorFromDiscriminatorValue); }],
            ["resourceLocation", (o, n) => { (o as unknown as WorkbookOperation).resourceLocation = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as WorkbookOperation).status = n.getEnumValue<WorkbookOperationStatus>(WorkbookOperationStatus); }],
        ]);
    };
    /**
     * Gets the resourceLocation property value. The resource URI for the result.
     * @returns a string
     */
    public get resourceLocation() {
        return this._resourceLocation;
    };
    /**
     * Sets the resourceLocation property value. The resource URI for the result.
     * @param value Value to set for the resourceLocation property.
     */
    public set resourceLocation(value: string | undefined) {
        this._resourceLocation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookOperationError>("error", this.error_escaped);
        writer.writeStringValue("resourceLocation", this.resourceLocation);
        writer.writeEnumValue<WorkbookOperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The current status of the operation. Possible values are: NotStarted, Running, Completed, Failed.
     * @returns a workbookOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The current status of the operation. Possible values are: NotStarted, Running, Completed, Failed.
     * @param value Value to set for the status property.
     */
    public set status(value: WorkbookOperationStatus | undefined) {
        this._status = value;
    };
}
