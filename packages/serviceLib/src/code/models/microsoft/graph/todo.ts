import {Entity, TodoTaskList} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Todo extends Entity implements Parsable {
    /** The task lists in the users mailbox.  */
    private _lists?: TodoTaskList[] | undefined;
    /**
     * Instantiates a new todo and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the lists property value. The task lists in the users mailbox.
     * @returns a todoTaskList
     */
    public get lists() {
        return this._lists;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["lists", (o, n) => { (o as unknown as Todo).lists = n.getCollectionOfObjectValues<TodoTaskList>(TodoTaskList); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<TodoTaskList>("lists", this.lists);
    };
    /**
     * Sets the lists property value. The task lists in the users mailbox.
     * @param value Value to set for the lists property.
     */
    public set lists(value: TodoTaskList[] | undefined) {
        this._lists = value;
    };
}
