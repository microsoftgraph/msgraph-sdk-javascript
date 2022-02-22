import {Entity, Extension, TodoTask, WellknownListName} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TodoTaskList extends Entity implements Parsable {
    /** The name of the task list.  */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for the task list. Nullable.  */
    private _extensions?: Extension[] | undefined;
    /** True if the user is owner of the given task list.  */
    private _isOwner?: boolean | undefined;
    /** True if the task list is shared with other users  */
    private _isShared?: boolean | undefined;
    /** The tasks in this task list. Read-only. Nullable.  */
    private _tasks?: TodoTask[] | undefined;
    /** Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.  */
    private _wellknownListName?: WellknownListName | undefined;
    /**
     * Instantiates a new todoTaskList and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the task list.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the task list. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Gets the isOwner property value. True if the user is owner of the given task list.
     * @returns a boolean
     */
    public get isOwner() {
        return this._isOwner;
    };
    /**
     * Gets the isShared property value. True if the task list is shared with other users
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Gets the tasks property value. The tasks in this task list. Read-only. Nullable.
     * @returns a todoTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Gets the wellknownListName property value. Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.
     * @returns a wellknownListName
     */
    public get wellknownListName() {
        return this._wellknownListName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as TodoTaskList).displayName = n.getStringValue(); }],
            ["extensions", (o, n) => { (o as unknown as TodoTaskList).extensions = n.getCollectionOfObjectValues<Extension>(Extension); }],
            ["isOwner", (o, n) => { (o as unknown as TodoTaskList).isOwner = n.getBooleanValue(); }],
            ["isShared", (o, n) => { (o as unknown as TodoTaskList).isShared = n.getBooleanValue(); }],
            ["tasks", (o, n) => { (o as unknown as TodoTaskList).tasks = n.getCollectionOfObjectValues<TodoTask>(TodoTask); }],
            ["wellknownListName", (o, n) => { (o as unknown as TodoTaskList).wellknownListName = n.getEnumValue<WellknownListName>(WellknownListName); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeBooleanValue("isOwner", this.isOwner);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeCollectionOfObjectValues<TodoTask>("tasks", this.tasks);
        writer.writeEnumValue<WellknownListName>("wellknownListName", this.wellknownListName);
    };
    /**
     * Sets the displayName property value. The name of the task list.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the task list. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Sets the isOwner property value. True if the user is owner of the given task list.
     * @param value Value to set for the isOwner property.
     */
    public set isOwner(value: boolean | undefined) {
        this._isOwner = value;
    };
    /**
     * Sets the isShared property value. True if the task list is shared with other users
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Sets the tasks property value. The tasks in this task list. Read-only. Nullable.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: TodoTask[] | undefined) {
        this._tasks = value;
    };
    /**
     * Sets the wellknownListName property value. Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList, flaggedEmails, unknownFutureValue.
     * @param value Value to set for the wellknownListName property.
     */
    public set wellknownListName(value: WellknownListName | undefined) {
        this._wellknownListName = value;
    };
}
