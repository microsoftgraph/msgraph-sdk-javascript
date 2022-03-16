import {createResultInfoFromDiscriminatorValue} from './createResultInfoFromDiscriminatorValue';
import {Entity, ResultInfo} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CommsOperation extends Entity implements Parsable {
    /** Unique Client Context string. Max limit is 256 chars.  */
    private _clientContext?: string | undefined;
    /** The result information. Read-only.  */
    private _resultInfo?: ResultInfo | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only.  */
    private _status?: OperationStatus | undefined;
    /**
     * Gets the clientContext property value. Unique Client Context string. Max limit is 256 chars.
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Sets the clientContext property value. Unique Client Context string. Max limit is 256 chars.
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Instantiates a new commsOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["clientContext", (o, n) => { (o as unknown as CommsOperation).clientContext = n.getStringValue(); }],
            ["resultInfo", (o, n) => { (o as unknown as CommsOperation).resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); }],
            ["status", (o, n) => { (o as unknown as CommsOperation).status = n.getEnumValue<OperationStatus>(OperationStatus); }],
        ]);
    };
    /**
     * Gets the resultInfo property value. The result information. Read-only.
     * @returns a resultInfo
     */
    public get resultInfo() {
        return this._resultInfo;
    };
    /**
     * Sets the resultInfo property value. The result information. Read-only.
     * @param value Value to set for the resultInfo property.
     */
    public set resultInfo(value: ResultInfo | undefined) {
        this._resultInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeObjectValue<ResultInfo>("resultInfo", this.resultInfo);
        writer.writeEnumValue<OperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. Possible values are: notStarted, running, completed, failed. Read-only.
     * @returns a operationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Possible values are: notStarted, running, completed, failed. Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: OperationStatus | undefined) {
        this._status = value;
    };
}
