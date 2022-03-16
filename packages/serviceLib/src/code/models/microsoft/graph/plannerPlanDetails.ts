import {createPlannerCategoryDescriptionsFromDiscriminatorValue} from './createPlannerCategoryDescriptionsFromDiscriminatorValue';
import {createPlannerUserIdsFromDiscriminatorValue} from './createPlannerUserIdsFromDiscriminatorValue';
import {Entity, PlannerCategoryDescriptions, PlannerUserIds} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerPlanDetails extends Entity implements Parsable {
    /** An object that specifies the descriptions of the six categories that can be associated with tasks in the plan  */
    private _categoryDescriptions?: PlannerCategoryDescriptions | undefined;
    /** Set of user ids that this plan is shared with. If you are leveraging Microsoft 365 groups, use the Groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection though it is not required for them to access the plan owned by the group.  */
    private _sharedWith?: PlannerUserIds | undefined;
    /**
     * Gets the categoryDescriptions property value. An object that specifies the descriptions of the six categories that can be associated with tasks in the plan
     * @returns a plannerCategoryDescriptions
     */
    public get categoryDescriptions() {
        return this._categoryDescriptions;
    };
    /**
     * Sets the categoryDescriptions property value. An object that specifies the descriptions of the six categories that can be associated with tasks in the plan
     * @param value Value to set for the categoryDescriptions property.
     */
    public set categoryDescriptions(value: PlannerCategoryDescriptions | undefined) {
        this._categoryDescriptions = value;
    };
    /**
     * Instantiates a new plannerPlanDetails and sets the default values.
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
            ["categoryDescriptions", (o, n) => { (o as unknown as PlannerPlanDetails).categoryDescriptions = n.getObjectValue<PlannerCategoryDescriptions>(createPlannerCategoryDescriptionsFromDiscriminatorValue); }],
            ["sharedWith", (o, n) => { (o as unknown as PlannerPlanDetails).sharedWith = n.getObjectValue<PlannerUserIds>(createPlannerUserIdsFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PlannerCategoryDescriptions>("categoryDescriptions", this.categoryDescriptions);
        writer.writeObjectValue<PlannerUserIds>("sharedWith", this.sharedWith);
    };
    /**
     * Gets the sharedWith property value. Set of user ids that this plan is shared with. If you are leveraging Microsoft 365 groups, use the Groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection though it is not required for them to access the plan owned by the group.
     * @returns a plannerUserIds
     */
    public get sharedWith() {
        return this._sharedWith;
    };
    /**
     * Sets the sharedWith property value. Set of user ids that this plan is shared with. If you are leveraging Microsoft 365 groups, use the Groups API to manage group membership to share the group's plan. You can also add existing members of the group to this collection though it is not required for them to access the plan owned by the group.
     * @param value Value to set for the sharedWith property.
     */
    public set sharedWith(value: PlannerUserIds | undefined) {
        this._sharedWith = value;
    };
}
