import {AppIdentity, Entity, PrintTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskDefinition extends Entity implements Parsable {
    private _createdBy?: AppIdentity | undefined;
    /** The name of the printTaskDefinition.  */
    private _displayName?: string | undefined;
    /** A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.  */
    private _tasks?: PrintTask[] | undefined;
    /**
     * Instantiates a new printTaskDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. 
     * @returns a appIdentity
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the displayName property value. The name of the printTaskDefinition.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
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
            ["createdBy", (o, n) => { (o as unknown as PrintTaskDefinition).createdBy = n.getObjectValue<AppIdentity>(AppIdentity); }],
            ["displayName", (o, n) => { (o as unknown as PrintTaskDefinition).displayName = n.getStringValue(); }],
            ["tasks", (o, n) => { (o as unknown as PrintTaskDefinition).tasks = n.getCollectionOfObjectValues<PrintTask>(PrintTask); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AppIdentity>("createdBy", this.createdBy);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<PrintTask>("tasks", this.tasks);
    };
    /**
     * Sets the createdBy property value. 
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: AppIdentity | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the displayName property value. The name of the printTaskDefinition.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the tasks property value. A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PrintTask[] | undefined) {
        this._tasks = value;
    };
}
