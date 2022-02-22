import {Entity, PrintOperationStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintOperation extends Entity implements Parsable {
    /** The DateTimeOffset when the operation was created. Read-only.  */
    private _createdDateTime?: Date | undefined;
    private _status?: PrintOperationStatus | undefined;
    /**
     * Instantiates a new printOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the operation was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the status property value. 
     * @returns a printOperationStatus
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
            ["createdDateTime", (o, n) => { (o as unknown as PrintOperation).createdDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as PrintOperation).status = n.getObjectValue<PrintOperationStatus>(PrintOperationStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<PrintOperationStatus>("status", this.status);
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the operation was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: PrintOperationStatus | undefined) {
        this._status = value;
    };
}
