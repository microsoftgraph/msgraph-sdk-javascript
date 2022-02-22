import {Entity, PrintTaskDefinition, PrintTaskStatus, PrintTaskTrigger} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTask extends Entity implements Parsable {
    private _definition?: PrintTaskDefinition | undefined;
    /** The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only.  */
    private _parentUrl?: string | undefined;
    private _status?: PrintTaskStatus | undefined;
    private _trigger?: PrintTaskTrigger | undefined;
    /**
     * Instantiates a new printTask and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the definition property value. 
     * @returns a printTaskDefinition
     */
    public get definition() {
        return this._definition;
    };
    /**
     * Gets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only.
     * @returns a string
     */
    public get parentUrl() {
        return this._parentUrl;
    };
    /**
     * Gets the status property value. 
     * @returns a printTaskStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the trigger property value. 
     * @returns a printTaskTrigger
     */
    public get trigger() {
        return this._trigger;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["definition", (o, n) => { (o as unknown as PrintTask).definition = n.getObjectValue<PrintTaskDefinition>(PrintTaskDefinition); }],
            ["parentUrl", (o, n) => { (o as unknown as PrintTask).parentUrl = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as PrintTask).status = n.getObjectValue<PrintTaskStatus>(PrintTaskStatus); }],
            ["trigger", (o, n) => { (o as unknown as PrintTask).trigger = n.getObjectValue<PrintTaskTrigger>(PrintTaskTrigger); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrintTaskDefinition>("definition", this.definition);
        writer.writeStringValue("parentUrl", this.parentUrl);
        writer.writeObjectValue<PrintTaskStatus>("status", this.status);
        writer.writeObjectValue<PrintTaskTrigger>("trigger", this.trigger);
    };
    /**
     * Sets the definition property value. 
     * @param value Value to set for the definition property.
     */
    public set definition(value: PrintTaskDefinition | undefined) {
        this._definition = value;
    };
    /**
     * Sets the parentUrl property value. The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only.
     * @param value Value to set for the parentUrl property.
     */
    public set parentUrl(value: string | undefined) {
        this._parentUrl = value;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: PrintTaskStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the trigger property value. 
     * @param value Value to set for the trigger property.
     */
    public set trigger(value: PrintTaskTrigger | undefined) {
        this._trigger = value;
    };
}
