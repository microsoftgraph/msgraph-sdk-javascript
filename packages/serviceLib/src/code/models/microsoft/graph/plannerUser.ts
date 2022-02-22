import {Entity, PlannerPlan, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerUser extends Entity implements Parsable {
    /** Read-only. Nullable. Returns the plannerTasks assigned to the user.  */
    private _plans?: PlannerPlan[] | undefined;
    /** Read-only. Nullable. Returns the plannerPlans shared with the user.  */
    private _tasks?: PlannerTask[] | undefined;
    /**
     * Instantiates a new plannerUser and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the plans property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
     * @returns a plannerPlan
     */
    public get plans() {
        return this._plans;
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. Returns the plannerPlans shared with the user.
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
            ["plans", (o, n) => { (o as unknown as PlannerUser).plans = n.getCollectionOfObjectValues<PlannerPlan>(PlannerPlan); }],
            ["tasks", (o, n) => { (o as unknown as PlannerUser).tasks = n.getCollectionOfObjectValues<PlannerTask>(PlannerTask); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PlannerPlan>("plans", this.plans);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
    };
    /**
     * Sets the plans property value. Read-only. Nullable. Returns the plannerTasks assigned to the user.
     * @param value Value to set for the plans property.
     */
    public set plans(value: PlannerPlan[] | undefined) {
        this._plans = value;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Returns the plannerPlans shared with the user.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
}
