import {Entity, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerBucket extends Entity implements Parsable {
    /** Name of the bucket.  */
    private _name?: string | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here.  */
    private _orderHint?: string | undefined;
    /** Plan ID to which the bucket belongs.  */
    private _planId?: string | undefined;
    /** Read-only. Nullable. The collection of tasks in the bucket.  */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerBucket and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the name property value. Name of the bucket.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * Gets the planId property value. Plan ID to which the bucket belongs.
     * @returns a string
     */
    public get planId() {
        return this._planId;
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. The collection of tasks in the bucket.
     * @returns a plannerTask
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
            ["name", (o, n) => { (o as unknown as PlannerBucket).name = n.getStringValue(); }],
            ["orderHint", (o, n) => { (o as unknown as PlannerBucket).orderHint = n.getStringValue(); }],
            ["planId", (o, n) => { (o as unknown as PlannerBucket).planId = n.getStringValue(); }],
            ["tasks", (o, n) => { (o as unknown as PlannerBucket).tasks = n.getCollectionOfObjectValues<PlannerTask>(PlannerTask); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("orderHint", this.orderHint);
        writer.writeStringValue("planId", this.planId);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
    };
    /**
     * Sets the name property value. Name of the bucket.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        this._orderHint = value;
    };
    /**
     * Sets the planId property value. Plan ID to which the bucket belongs.
     * @param value Value to set for the planId property.
     */
    public set planId(value: string | undefined) {
        this._planId = value;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. The collection of tasks in the bucket.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
}
