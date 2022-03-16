import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerBucketFromDiscriminatorValue} from './createPlannerBucketFromDiscriminatorValue';
import {createPlannerPlanDetailsFromDiscriminatorValue} from './createPlannerPlanDetailsFromDiscriminatorValue';
import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {Entity, IdentitySet, PlannerBucket, PlannerPlanDetails, PlannerTask} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlan extends Entity implements Parsable {
    /** Read-only. Nullable. Collection of buckets in the plan.  */
    private _buckets?: PlannerBucket[] | undefined;
    /** Read-only. The user who created the plan.  */
    private _createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _createdDateTime?: Date | undefined;
    /** Read-only. Nullable. Additional details about the plan.  */
    private _details?: PlannerPlanDetails | undefined;
    /** ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.  */
    private _owner?: string | undefined;
    /** Read-only. Nullable. Collection of tasks in the plan.  */
    private _tasks?: PlannerTask[] | undefined;
    /** Required. Title of the plan.  */
    private _title?: string | undefined;
    /**
     * Gets the buckets property value. Read-only. Nullable. Collection of buckets in the plan.
     * @returns a plannerBucket
     */
    public get buckets() {
        return this._buckets;
    };
    /**
     * Sets the buckets property value. Read-only. Nullable. Collection of buckets in the plan.
     * @param value Value to set for the buckets property.
     */
    public set buckets(value: PlannerBucket[] | undefined) {
        this._buckets = value;
    };
    /**
     * Instantiates a new plannerPlan and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. Read-only. The user who created the plan.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Read-only. The user who created the plan.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the details property value. Read-only. Nullable. Additional details about the plan.
     * @returns a plannerPlanDetails
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Read-only. Nullable. Additional details about the plan.
     * @param value Value to set for the details property.
     */
    public set details(value: PlannerPlanDetails | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["buckets", (o, n) => { (o as unknown as PlannerPlan).buckets = n.getCollectionOfObjectValues<PlannerBucket>(createPlannerBucketFromDiscriminatorValue); }],
            ["createdBy", (o, n) => { (o as unknown as PlannerPlan).createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["createdDateTime", (o, n) => { (o as unknown as PlannerPlan).createdDateTime = n.getDateValue(); }],
            ["details", (o, n) => { (o as unknown as PlannerPlan).details = n.getObjectValue<PlannerPlanDetails>(createPlannerPlanDetailsFromDiscriminatorValue); }],
            ["owner", (o, n) => { (o as unknown as PlannerPlan).owner = n.getStringValue(); }],
            ["tasks", (o, n) => { (o as unknown as PlannerPlan).tasks = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); }],
            ["title", (o, n) => { (o as unknown as PlannerPlan).title = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the owner property value. ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        this._owner = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PlannerBucket>("buckets", this.buckets);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<PlannerPlanDetails>("details", this.details);
        writer.writeStringValue("owner", this.owner);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", this.tasks);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the tasks property value. Read-only. Nullable. Collection of tasks in the plan.
     * @returns a plannerTask
     */
    public get tasks() {
        return this._tasks;
    };
    /**
     * Sets the tasks property value. Read-only. Nullable. Collection of tasks in the plan.
     * @param value Value to set for the tasks property.
     */
    public set tasks(value: PlannerTask[] | undefined) {
        this._tasks = value;
    };
    /**
     * Gets the title property value. Required. Title of the plan.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Required. Title of the plan.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
